import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:capsule/capsule.dart';
import 'package:flutter_integration_example/widgets/header.dart';
import 'package:flutter_integration_example/widgets/button.dart';
import 'package:flutter_integration_example/widgets/input.dart';
import 'package:flutter_integration_example/widgets/sign_message.dart';

class NativePasskeysAuthExample extends StatefulWidget {
  final VoidCallback onBack;

  const NativePasskeysAuthExample({super.key, required this.onBack});

  @override
  State<NativePasskeysAuthExample> createState() => _NativePasskeysAuthExampleState();
}

class _NativePasskeysAuthExampleState extends State<NativePasskeysAuthExample> {
  late Capsule _capsule;
  String authStage = 'initial';
  String email = '';
  String verificationCode = '';
  String messageToSign = '';
  String signedMessage = '';
  String error = '';
  String walletAddress = '';
  String walletId = '';
  String recoveryShare = '';
  bool isLoading = false;

  late TextEditingController _emailController;
  late TextEditingController _verificationCodeController;

  @override
  void initState() {
    super.initState();
    _initializeCapsuleSDK();
    _emailController = TextEditingController();
    _verificationCodeController = TextEditingController();

    _emailController.addListener(() {
      setState(() {
        email = _emailController.text;
      });
    });

    _verificationCodeController.addListener(() {
      setState(() {
        verificationCode = _verificationCodeController.text;
      });
    });
  }

  @override
  void dispose() {
    _emailController.dispose();
    _verificationCodeController.dispose();
    super.dispose();
  }

  void _initializeCapsuleSDK() {
    const String capsuleApiKey = 'd0b61c2c8865aaa2fb12886651627271';
    const environment = Environment.beta;

    _capsule = Capsule(
      environment: environment,
      apiKey: capsuleApiKey,
    )..init();

    _checkLoginStatus();
  }

  Future<void> _checkLoginStatus() async {
    try {
      final isLoggedIn = await _capsule.isFullyLoggedIn();
      if (isLoggedIn) {
        final wallets = await _capsule.getWallets();
        if (wallets.isNotEmpty) {
          final firstWallet = wallets.values.first;
          setState(() {
            authStage = 'authenticated';
            walletId = firstWallet.id;
            walletAddress = firstWallet.address ?? '';
          });
        }
      }
    } catch (err) {
      setState(() => error = 'Failed to check login status: $err');
    }
  }

  Future<void> _handleCreateUser() async {
    if (_emailController.text.isEmpty) {
      setState(() => error = 'Email address cannot be empty');
      return;
    }

    setState(() {
      error = '';
      isLoading = true;
    });

    try {
      await _capsule.createUser(_emailController.text);
      setState(() => authStage = 'verification');
    } catch (err) {
      setState(() => error = 'Failed to create user: $err');
    } finally {
      setState(() => isLoading = false);
    }
  }

  Future<void> _handleVerification() async {
    if (_verificationCodeController.text.isEmpty) {
      setState(() => error = 'Verification code cannot be empty');
      return;
    }

    setState(() {
      error = '';
      isLoading = true;
    });

    try {
      final biometricsId = await _capsule.verifyEmail(_verificationCodeController.text);
      await _capsule.generatePasskey(_emailController.text, biometricsId);
      final result = await _capsule.createWallet(skipDistribute: false);
      setState(() {
        authStage = 'authenticated';
        walletId = result.wallet.id;
        walletAddress = result.wallet.address ?? '';
        recoveryShare = result.recoveryShare;
      });
    } catch (err) {
      setState(() => error = 'Verification failed: $err');
    } finally {
      setState(() => isLoading = false);
    }
  }

  Future<void> _handlePasskeyLogin() async {
    setState(() {
      error = '';
      isLoading = true;
    });

    try {
      final wallet = await _capsule.login();
      if (wallet != null && wallet['id'] != null && wallet['address'] != null) {
        setState(() {
          authStage = 'authenticated';
          walletId = wallet['id']!;
          walletAddress = wallet['address']!;
        });
      } else {
        throw Exception('Invalid wallet data received after login');
      }
    } catch (err) {
      setState(() => error = 'Login failed: $err');
    } finally {
      setState(() => isLoading = false);
    }
  }

  Future<void> _handleSignMessage() async {
    if (walletId.isEmpty || messageToSign.isEmpty) {
      setState(() => error = 'Please enter a message to sign.');
      return;
    }

    setState(() {
      error = '';
      isLoading = true;
    });

    try {
      final base64message = base64.encode(utf8.encode(messageToSign));
      final signatureResponse =
          await _capsule.signMessage(walletId: walletId, messageBase64: base64message) as SuccessfulSignatureResult;
      setState(() => signedMessage = signatureResponse.signature);
    } catch (err) {
      setState(() => error = 'Failed to sign message: $err');
    } finally {
      setState(() => isLoading = false);
    }
  }

  Future<void> _handleBack() async {
    if (authStage == 'authenticated') {
      try {
        await _capsule.logout();
        _resetState();
      } catch (err) {
        setState(() => error = 'Failed to logout: $err');
      }
    }
    widget.onBack();
  }

  void _resetState() {
    setState(() {
      authStage = 'initial';
      _emailController.clear();
      _verificationCodeController.clear();
      messageToSign = '';
      error = '';
      walletAddress = '';
      walletId = '';
      recoveryShare = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0C0A09),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              CustomHeader(
                title: authStage == 'initial'
                    ? 'Native Passkeys Authentication'
                    : authStage == 'verification'
                        ? 'Email Verification'
                        : 'Sign Message',
                description: authStage == 'initial'
                    ? 'Enter your email to authenticate using native passkeys. If you\'re a new user, you\'ll be asked to verify your email.'
                    : authStage == 'verification'
                        ? 'A verification code has been sent to your email. Please enter it below to complete the authentication process.'
                        : 'Enter a message below to sign it using your authenticated passkey.',
              ),
              Expanded(
                child: Center(
                  child: _buildContent(),
                ),
              ),
              if (error.isNotEmpty)
                Text(
                  error,
                  style: const TextStyle(color: Color(0xFFFF6B6B), fontSize: 14),
                  textAlign: TextAlign.center,
                ),
              TextButton(
                onPressed: _handleBack,
                child: const Text(
                  'Back to Options',
                  style: TextStyle(color: Color(0xFFFE452B), fontSize: 16),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildContent() {
    switch (authStage) {
      case 'initial':
        return Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CustomInput(
              controller: _emailController,
              placeholder: 'Enter your email',
              keyboardType: TextInputType.emailAddress,
            ),
            const SizedBox(height: 16),
            CustomButton(
              onPressed: _handleCreateUser,
              title: 'Create Passkey',
              disabled: email.isEmpty,
              loading: isLoading,
            ),
            const SizedBox(height: 16),
            const Row(
              children: [
                Expanded(child: Divider(color: Color(0xFFD3D3D3))),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 16),
                  child: Text('OR', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                ),
                Expanded(child: Divider(color: Color(0xFFD3D3D3))),
              ],
            ),
            const SizedBox(height: 16),
            CustomButton(
              onPressed: _handlePasskeyLogin,
              title: 'Login with Passkey',
              loading: isLoading,
            ),
          ],
        );
      case 'verification':
        return Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CustomInput(
              controller: _verificationCodeController,
              placeholder: 'Enter verification code',
              keyboardType: TextInputType.number,
            ),
            const SizedBox(height: 16),
            CustomButton(
              onPressed: _handleVerification,
              title: 'Verify Code',
              disabled: verificationCode.isEmpty,
              loading: isLoading,
            ),
          ],
        );
      case 'authenticated':
        return AuthenticatedState(
          walletId: walletId,
          walletAddress: walletAddress,
          recoveryShare: recoveryShare,
          messageToSign: messageToSign,
          setMessageToSign: (value) => setState(() => messageToSign = value),
          handleSignMessage: _handleSignMessage,
          signedMessage: signedMessage,
          isLoading: isLoading,
        );
      default:
        return const SizedBox.shrink();
    }
  }
}
