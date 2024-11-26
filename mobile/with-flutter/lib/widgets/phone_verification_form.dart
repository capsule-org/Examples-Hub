import 'package:flutter/material.dart';
import 'package:with_flutter/widgets/info_card.dart';

class PhoneVerificationForm extends StatefulWidget {
  final String phone;
  final String countryCode;
  final void Function(
          String verificationCode, void Function(String) setErrorMessage)
      onVerificationSuccess;

  const PhoneVerificationForm({
    super.key,
    required this.phone,
    required this.countryCode,
    required this.onVerificationSuccess,
  });

  @override
  State<PhoneVerificationForm> createState() => _PhoneVerificationFormState();
}

class _PhoneVerificationFormState extends State<PhoneVerificationForm> {
  final _formKey = GlobalKey<FormState>();
  final _codeController = TextEditingController();
  String? _errorMessage;

  void _setErrorMessage(String message) {
    setState(() {
      _errorMessage = message;
    });
  }

  @override
  void dispose() {
    _codeController.dispose();
    super.dispose();
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
              title: 'SMS Verification',
              description:
                  'After calling "createUser", a verification code will be sent to the phone number. ',
            ),
            const SizedBox(height: 32),
            Text(
              'Verification code sent to:',
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const SizedBox(height: 8),
            Text(
              widget.phone,
              style: const TextStyle(fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),
            if (_errorMessage != null) ...[
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Theme.of(context).colorScheme.errorContainer,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  _errorMessage!,
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.onErrorContainer,
                  ),
                ),
              ),
              const SizedBox(height: 16),
            ],
            Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  TextFormField(
                    controller: _codeController,
                    keyboardType: TextInputType.number,
                    maxLength: 6,
                    decoration: const InputDecoration(
                      labelText: 'Verification Code',
                      hintText: 'Enter 6-digit code',
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter the verification code';
                      }
                      if (value.length != 6) {
                        return 'Code must be 6 digits';
                      }
                      if (!RegExp(r'^\d+$').hasMatch(value)) {
                        return 'Code must contain only numbers';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),
                  FilledButton(
                    onPressed: () {
                      if (_formKey.currentState?.validate() ?? false) {
                        // Clear any existing error message
                        setState(() {
                          _errorMessage = null;
                        });
                        // Pass the verification code and error message setter
                        widget.onVerificationSuccess(
                          _codeController.text,
                          _setErrorMessage,
                        );
                      }
                    },
                    child: const Text('Verify and Create Passkey'),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
