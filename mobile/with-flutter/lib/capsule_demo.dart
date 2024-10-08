import 'package:flutter/material.dart';
import 'package:flutter_integration_example/passkey_auth_example.dart';
import 'package:flutter_integration_example/widgets/button.dart';
import 'package:flutter_integration_example/widgets/header.dart';

class CapsuleDemo extends StatefulWidget {
  const CapsuleDemo({super.key});

  @override
  State<CapsuleDemo> createState() => _CapsuleDemoState();
}

class _CapsuleDemoState extends State<CapsuleDemo> {
  bool _showPasskeyAuth = false;

  void _togglePasskeyAuth() {
    setState(() {
      _showPasskeyAuth = !_showPasskeyAuth;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0C0A09),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: _showPasskeyAuth
              ? NativePasskeysAuthExample(
                  onBack: _togglePasskeyAuth,
                )
              : _buildAuthenticationOptions(),
        ),
      ),
    );
  }

  Widget _buildAuthenticationOptions() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const CustomHeader(
          title: 'Capsule SDK Flutter Example',
          description:
              'This app demonstrates the usage of Capsule\'s SDK for Flutter. Please select the authentication method below.',
        ),
        Expanded(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CustomButton(
                onPressed: _togglePasskeyAuth,
                title: 'Auth with Email & Passkeys',
              ),
              CustomButton(
                onPressed: _togglePasskeyAuth,
                title: 'Solana Support Coming Soon',
                disabled: true,
              ),
            ],
          ),
        ),
      ],
    );
  }
}
