import 'package:flutter/material.dart';
import 'package:cpsl_flutter/client/capsule.dart';

class DemoMetaMask extends StatefulWidget {
  const DemoMetaMask({super.key});

  @override
  State<DemoMetaMask> createState() => DemoMetaMaskState();
}

class DemoMetaMaskState extends State<DemoMetaMask> {
  @override
  void initState() {
    super.initState();
  }

  Future<void> _signTransaction() async {}

  void _signMessage() {
    metamaskConnector
        .signMessage(
            "Message to sign! Hello World", metamaskConnector.accounts.first)
        .then((onValue) => {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text('Message signed: $onValue'),
                ),
              )
            });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Meta Mask Wallet'),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(24),
              child: ElevatedButton(
                onPressed: _signMessage,
                style: ElevatedButton.styleFrom(
                  minimumSize: const Size.fromHeight(50),
                ),
                child: const Text('Sign Message'),
              ),
            ),
            // Padding(
            //   padding: const EdgeInsets.all(24),
            //   child: ElevatedButton(
            //     onPressed: _signTransaction,
            //     style: ElevatedButton.styleFrom(
            //       minimumSize: const Size.fromHeight(50),
            //     ),
            //     child: const Text('Sign Transaction'),
            //   ),
            // ),
          ],
        ),
      ),
    );
  }
}
