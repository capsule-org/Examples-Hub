import 'package:flutter/material.dart';

class DemoHome extends StatelessWidget {
  const DemoHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Success Icon
                Icon(
                  Icons.check_circle_outline,
                  size: 80,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(height: 24),

                // Success Message
                const Text(
                  'Authentication Successful!',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 16),

                // Additional Info
                const Text(
                  'You have successfully authenticated using Capsule SDK.',
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.black87,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 48),

                // Return Button
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).popUntil((route) => route.isFirst);
                  },
                  child: const Text('Return to Examples'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
