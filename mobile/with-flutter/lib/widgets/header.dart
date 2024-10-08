import 'package:flutter/material.dart';

class CustomHeader extends StatelessWidget {
  final String title;
  final String description;

  const CustomHeader({
    super.key,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(top: 16),
      child: Column(
        children: [
          Text(
            title,
            style: const TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 8),
          Text(
            description,
            style: const TextStyle(
              fontSize: 16,
              color: Color(0xFFD3D3D3),
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
