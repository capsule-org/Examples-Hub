import 'package:flutter/material.dart';
import 'package:with_flutter/widgets/info_card.dart';

class AuthForm extends StatefulWidget {
  final void Function(
          String email, void Function(String? message) setErrorMessage)
      onEmailSubmitted;
  final void Function(
          String phoneNumber, void Function(String? message) setErrorMessage)
      onPhoneNumberSubmitted;
  final void Function(void Function(String? message) setErrorMessage)
      onExistingPasskeyAuth;

  const AuthForm({
    super.key,
    required this.onEmailSubmitted,
    required this.onPhoneNumberSubmitted,
    required this.onExistingPasskeyAuth,
  });

  @override
  State<AuthForm> createState() => _AuthFormState();
}

class _AuthFormState extends State<AuthForm> {
  final _formKey = GlobalKey<FormState>();
  final _passwordFormKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _phoneNumberController = TextEditingController();
  String? _errorMessage;
  String? _phoneNumberErrorMessage;
  String? _passkeyErrorMessage;

  @override
  void dispose() {
    _emailController.dispose();
    super.dispose();
  }

  void _setErrorMessage(String? message) {
    setState(() {
      _errorMessage = message;
    });
  }

  void _setPhoneNumberErrorMessage(String? message) {
    setState(() {
      _phoneNumberErrorMessage = message;
    });
  }

  void _setPasskeyErrorMessage(String? message) {
    setState(() {
      _passkeyErrorMessage = message;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const InfoCard(
                title: 'Initial Authentication Screen',
                description:
                    'Login: Existing users authenticate via passkey. New users need email signup - use any @test.capsule.com email for beta testing (any OTP works). Users can be deleted in developer portal to reuse emails.'),
            const SizedBox(height: 32),
            _buildEmailForm(),
            const SizedBox(height: 24),
            _buildPhoneNumberForm(),
            const SizedBox(height: 24),
            _buildDivider(),
            const SizedBox(height: 24),
            _buildExistingPasskeyButton(),
          ],
        ),
      ),
    );
  }

  Widget _buildEmailForm() {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text(
            'Create new account',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: _emailController,
            keyboardType: TextInputType.emailAddress,
            decoration: const InputDecoration(
              labelText: 'Email',
              hintText: 'Enter your email',
              border: OutlineInputBorder(),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your email';
              }
              if (!RegExp(r'.+@.+\..+').hasMatch(value)) {
                return 'Please enter a valid email';
              }
              return null;
            },
          ),
          const SizedBox(height: 16),
          if (_errorMessage != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: Text(
                _errorMessage!,
                style: TextStyle(color: Theme.of(context).colorScheme.error),
                textAlign: TextAlign.center,
              ),
            ),
          FilledButton(
            onPressed: () {
              if (_formKey.currentState?.validate() ?? false) {
                widget.onEmailSubmitted(
                    _emailController.text, _setErrorMessage);
              }
            },
            child: const Text('Continue'),
          ),
        ],
      ),
    );
  }

  Widget _buildDivider() {
    return Row(
      children: [
        const Expanded(
          child: Divider(thickness: 1),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            'or',
            style: TextStyle(
              color: Theme.of(context).colorScheme.outline,
            ),
          ),
        ),
        const Expanded(
          child: Divider(thickness: 1),
        ),
      ],
    );
  }

  Widget _buildPhoneNumberForm() {
    return Form(
      key: _passwordFormKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          TextFormField(
            controller: _phoneNumberController,
            keyboardType: TextInputType.phone,
            decoration: const InputDecoration(
              labelText: 'Phone Number',
              hintText: 'Enter your phone number',
              border: OutlineInputBorder(),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your phone number';
              }
              return null;
            },
          ),
          const SizedBox(height: 16),
          if (_phoneNumberErrorMessage != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: Text(
                _phoneNumberErrorMessage!,
                style: TextStyle(color: Theme.of(context).colorScheme.error),
                textAlign: TextAlign.center,
              ),
            ),
          FilledButton(
            onPressed: () {
              if (_passwordFormKey.currentState?.validate() ?? false) {
                widget.onPhoneNumberSubmitted(
                    _phoneNumberController.text, _setPhoneNumberErrorMessage);
              }
            },
            child: const Text('Continue'),
          ),
        ],
      ),
    );
  }

  Widget _buildExistingPasskeyButton() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        FilledButton.icon(
          onPressed: () {
            widget.onExistingPasskeyAuth(_setPasskeyErrorMessage);
          },
          icon: const Icon(Icons.fingerprint),
          label: const Text('Sign in with Passkey'),
        ),
        if (_passkeyErrorMessage != null)
          Padding(
            padding: const EdgeInsets.only(top: 16),
            child: Text(
              _passkeyErrorMessage!,
              style: TextStyle(color: Theme.of(context).colorScheme.error),
              textAlign: TextAlign.center,
            ),
          ),
      ],
    );
  }
}
