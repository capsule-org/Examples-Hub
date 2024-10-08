import 'package:flutter/material.dart';
import 'package:flutter_integration_example/widgets/button.dart';
import 'package:flutter_integration_example/widgets/copyable_text.dart';
import 'package:flutter_integration_example/widgets/input.dart';

class AuthenticatedState extends StatefulWidget {
  final String walletId;
  final String walletAddress;
  final String? recoveryShare;
  final String messageToSign;
  final ValueChanged<String> setMessageToSign;
  final VoidCallback handleSignMessage;
  final String signedMessage;
  final bool isLoading;

  const AuthenticatedState({
    super.key,
    required this.walletId,
    required this.walletAddress,
    this.recoveryShare,
    required this.messageToSign,
    required this.setMessageToSign,
    required this.handleSignMessage,
    required this.signedMessage,
    required this.isLoading,
  });

  @override
  _AuthenticatedStateState createState() => _AuthenticatedStateState();
}

class _AuthenticatedStateState extends State<AuthenticatedState> {
  late TextEditingController _messageController;

  @override
  void initState() {
    super.initState();
    _messageController = TextEditingController(text: widget.messageToSign);
    _messageController.addListener(_onMessageChanged);
  }

  @override
  void dispose() {
    _messageController.removeListener(_onMessageChanged);
    _messageController.dispose();
    super.dispose();
  }

  void _onMessageChanged() {
    widget.setMessageToSign(_messageController.text);
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Column(
        children: [
          CopyableText(label: 'Wallet ID', value: widget.walletId),
          CopyableText(label: 'Wallet Address', value: widget.walletAddress),
          if (widget.recoveryShare != null) CopyableText(label: 'Recovery Share', value: widget.recoveryShare!),
          CustomInput(
            controller: _messageController,
            placeholder: 'Enter message to sign',
            multiline: true,
          ),
          CustomButton(
            disabled: widget.messageToSign.isEmpty,
            onPressed: widget.handleSignMessage,
            title: 'Sign Message',
            loading: widget.isLoading,
          ),
          if (widget.signedMessage.isNotEmpty) CopyableText(label: 'Signed Message', value: widget.signedMessage),
        ],
      ),
    );
  }
}
