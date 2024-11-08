import 'package:capsule/capsule.dart';
import 'package:flutter/material.dart';
import 'package:with_flutter/widgets/info_card.dart';

class SuccessScreen extends StatelessWidget {
  final VoidCallback onLogout;
  final Wallet wallet;
  final String? address;
  final String? recoveryShare;

  const SuccessScreen({
    super.key,
    required this.onLogout,
    required this.wallet,
    this.address,
    this.recoveryShare,
  });

  Widget _buildInfoItem(BuildContext context, String label, String value) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceVariant,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: Theme.of(context).textTheme.labelLarge?.copyWith(
                  color: Theme.of(context).colorScheme.primary,
                  fontWeight: FontWeight.bold,
                ),
          ),
          const SizedBox(height: 8),
          Text(
            value,
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  fontFamily: 'monospace',
                ),
          ),
        ],
      ),
    );
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
              title: 'Authentication Success',
              description: 'After succesful auth you can now use Capsule for signing transactions.',
            ),
            const SizedBox(height: 32),
            Icon(
              Icons.check_circle_outline,
              size: 64,
              color: Theme.of(context).colorScheme.primary,
            ),
            const SizedBox(height: 16),
            Text(
              'Authentication Successful',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            const Text(
              'You have successfully authenticated with passkey.',
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 32),
            if (address != null) ...[
              _buildInfoItem(context, 'Wallet Address', address!),
              const SizedBox(height: 16),
            ],
            if (recoveryShare != null && recoveryShare!.isNotEmpty) ...[
              _buildInfoItem(context, 'Recovery Share', recoveryShare!),
              const SizedBox(height: 32),
            ] else ...[
              _buildInfoItem(context, 'Recovery Share', 'Recovery Share is only given after new wallet creation'),
              const SizedBox(height: 32),
            ],
            FilledButton(
              onPressed: onLogout,
              child: const Text('Logout'),
            ),
          ],
        ),
      ),
    );
  }
}
