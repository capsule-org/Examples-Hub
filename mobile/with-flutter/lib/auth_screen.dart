import 'package:capsule/capsule.dart';
import 'package:flutter/material.dart';
import 'widgets/auth_form.dart';
import 'widgets/verification_form.dart';
import 'widgets/success_screen.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

enum AuthScreenState {
  initial,
  verification,
  success,
}

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  AuthScreenState _currentState = AuthScreenState.initial;
  String? _email;
  late Capsule _capsule;
  Wallet? _wallet;
  String? _address;
  String? _recoveryShare;

  @override
  void initState() {
    _capsule = Capsule(environment: Environment.beta, apiKey: dotenv.env['CAPSULE_API_KEY']!);
    _capsule.init();
    super.initState();
  }

// On Email submitted, check if user exists, create user if not, and move to verification screen
  void _handleEmailSubmitted(String email, void Function(String) setErrorMessage) async {
    bool userExists;
    try {
      userExists = await _capsule.checkIfUserExists(email);
    } catch (e) {
      setErrorMessage('Error checking if user exists with email: $email');
      return;
    }

    if (userExists) {
      setErrorMessage('User already exists, please use passkey login');
      return;
    }

    try {
      await _capsule.createUser(email);
    } catch (e) {
      setErrorMessage('Error creating new user with email: $email');
      return;
    }

    setState(() {
      _email = email;
      _currentState = AuthScreenState.verification;
    });
  }

// On verification success, generate passkey, create wallet, and move to success screen
  void _handleVerificationSuccess(String verificationCode, void Function(String) setErrorMessage) async {
    String? biometricsId;

    try {
      biometricsId = await _capsule.verifyEmail(verificationCode);
    } catch (e) {
      setErrorMessage('Error verifying email with code: $verificationCode');
      return;
    }

    if (_email == null || _email!.isEmpty) {
      setErrorMessage('Email is not set or is empty');
      return;
    }

    try {
      await _capsule.generatePasskey(_email!, biometricsId);
    } catch (e) {
      setErrorMessage('Error generating passkey for email: $_email');
      return;
    }

    try {
      final result = await _capsule.createWallet(skipDistribute: false);

      setState(() {
        _wallet = result.wallet;
        _address = result.wallet.address;
        _recoveryShare = result.recoveryShare;
        _currentState = AuthScreenState.success;
      });
    } catch (e) {
      setErrorMessage('Error getting wallet');
      return;
    }
  }

  void _handleExistingPasskeyAuth(void Function(String) setErrorMessage) async {
    Wallet wallet;

    try {
      wallet = await _capsule.login();
    } catch (e) {
      setErrorMessage('Error during login: ${e.toString()}');
      return;
    }

    setState(() {
      _wallet = wallet;
      _address = wallet.address;
      _recoveryShare = "";
      _currentState = AuthScreenState.success;
    });
  }

  void _handleBack() {
    setState(() {
      _currentState = AuthScreenState.initial;
      _email = null;
    });
  }

  void _handleLogout() {
    _capsule.logout();

    setState(() {
      _currentState = AuthScreenState.initial;
      _email = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _currentState == AuthScreenState.verification
          ? AppBar(
              leading: BackButton(onPressed: _handleBack),
              title: const Text('Create Passkey'),
            )
          : AppBar(
              title: const Text('Passkey Authentication'),
            ),
      body: SafeArea(
        child: _buildCurrentScreen(),
      ),
    );
  }

  Widget _buildCurrentScreen() {
    return switch (_currentState) {
      AuthScreenState.initial => AuthForm(
          onEmailSubmitted: _handleEmailSubmitted,
          onExistingPasskeyAuth: _handleExistingPasskeyAuth,
        ),
      AuthScreenState.verification => VerificationForm(
          email: _email!,
          onVerificationSuccess: _handleVerificationSuccess,
        ),
      AuthScreenState.success =>
        SuccessScreen(onLogout: _handleLogout, wallet: _wallet!, address: _address!, recoveryShare: _recoveryShare!),
    };
  }
}
