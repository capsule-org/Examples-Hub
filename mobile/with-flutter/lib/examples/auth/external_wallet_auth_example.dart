// ignore_for_file: unused_field, unused_local_variable
import 'dart:async';
import 'dart:convert';
import 'package:app_links/app_links.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:capsule/capsule.dart';
import 'package:cpsl_flutter/client/capsule.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:solana_web3/solana_web3.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:pinenacl/x25519.dart';

enum ExternalWalletProvider { phantom }

class CapsuleExternalWalletExample extends StatefulWidget {
  const CapsuleExternalWalletExample({super.key});

  @override
  State<CapsuleExternalWalletExample> createState() =>
      _CapsuleOAuthExampleState();
}

class _CapsuleOAuthExampleState extends State<CapsuleExternalWalletExample> {
  bool _isLoading = false;
  String? _loadingProvider;
  Wallet? _wallet;
  String? _address;
  String? _recoveryShare;
  String? _phantomEncryptionPublicKey;
  Box? _sharedSecret;
  String? _nonce;

  final PrivateKey _dAppSecretKey = PrivateKey.generate();

  late AppLinks _appLinks;
  StreamSubscription<Uri>? _linkSubscription;

  @override
  void initState() {
    super.initState();
    _checkLoginStatus();

    initDeepLinks();
  }

  @override
  void dispose() {
    _linkSubscription?.cancel();

    super.dispose();
  }

  /// Created a shared secret between Phantom Wallet and our DApp using our [_dAppSecretKey] and [phantom_encryption_public_key].
  ///
  /// - `phantom_encryption_public_key` is the public key of Phantom Wallet.
  void createSharedSecret(Uint8List remotePubKey) async {
    _sharedSecret = Box(
      myPrivateKey: _dAppSecretKey,
      theirPublicKey: PublicKey(remotePubKey),
    );
  }

  /// Decrypts the [data] payload returned by Phantom Wallet
  ///
  /// - Using [nonce] we generated on server side and [_dAppSecretKey] we decrypt the encrypted data.
  /// - Returns the decrypted `payload` as a `Map<dynamic, dynamic>`.
  Map<dynamic, dynamic> decryptPayload({
    required String data,
    required String nonce,
  }) {
    if (_sharedSecret == null) {
      return <String, String>{};
    }

    final decryptedData = _sharedSecret?.decrypt(
      ByteList(base58Decode(data)),
      nonce: Uint8List.fromList(base58Decode(nonce)),
    );

    Map payload =
        const JsonDecoder().convert(String.fromCharCodes(decryptedData!));
    return payload;
  }

  /// Encrypts the data payload to be sent to Phantom Wallet.
  ///
  /// - Returns the encrypted `payload` and `nonce`.
  Map<String, dynamic> encryptPayload(Map<String, dynamic> data) {
    if (_sharedSecret == null) {
      return <String, String>{};
    }
    var nonce = PineNaClUtils.randombytes(24);
    var payload = jsonEncode(data).codeUnits;
    var encryptedPayload =
        _sharedSecret?.encrypt(payload.toUint8List(), nonce: nonce).cipherText;
    return {"encryptedPayload": encryptedPayload?.asTypedList, "nonce": nonce};
  }

  Future<void> initDeepLinks() async {
    _appLinks = AppLinks();

    // Handle links
    _linkSubscription = _appLinks.uriLinkStream.listen((uri) {
      debugPrint('onAppLink: $uri');

      if (uri.host == 'phantom') {
        final query = uri.queryParameters;
        if (query.containsKey('handleQuery')) {
          final handleQuery = query['handleQuery'];
          if (handleQuery == 'onConnect') {
            final publicKeyEncoded = query['phantom_encryption_public_key'];
            final publicKey = base58Decode(publicKeyEncoded!);
            createSharedSecret(publicKey);

            final data = query['data'];
            final newNonce = query['nonce'];

            final decryptedPayload =
                decryptPayload(data: data!, nonce: newNonce!);
            debugPrint('Decrypted Payload: $decryptedPayload');

            setState(() {
              _address = decryptedPayload['address'];
              _nonce = newNonce;
              _phantomEncryptionPublicKey = publicKeyEncoded;
            });
          }
        }
      }

      setState(() {
        _isLoading = false;
      });
    });
  }

  Future<void> _checkLoginStatus() async {
    try {
      final isLoggedIn = await capsuleClient.isFullyLoggedIn();
      if (isLoggedIn && mounted) {
        final wallets = await capsuleClient.getWallets();
        if (wallets.isNotEmpty) {
          setState(() {
            _wallet = wallets.values.first;
            _address = wallets.values.first.address;
            _recoveryShare = "";
          });
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text('Error checking login status: ${e.toString()}')));
      }
    }
  }

  Future<void> _handleExternalWalletLogin(
      ExternalWalletProvider provider) async {
    if (!mounted) return;

    setState(() {
      _isLoading = true;
    });

    Map<String, dynamic> queryParameters = {
      "dapp_encryption_public_key":
          base58Encode(_dAppSecretKey.publicKey.asTypedList),
      "cluster": "devnet",
      "app_url": "https://deeplink-movie-tutorial-dummy-site.vercel.app/",
      "redirect_link": "capsuleflutter://phantom?handleQuery=onConnect",
    };

    var url = Uri(
        scheme: 'https',
        host: 'phantom.app',
        path: '/ul/v1/connect',
        queryParameters: queryParameters);

    await launchUrl(url, mode: LaunchMode.externalNonBrowserApplication);
  }

  Widget _buildExternalWalletButton({
    required ExternalWalletProvider provider,
    required String label,
    required dynamic icon,
    required Color backgroundColor,
    required Color textColor,
  }) {
    final isLoading = _isLoading;

    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: ElevatedButton(
        onPressed:
            _isLoading ? null : () => _handleExternalWalletLogin(provider),
        style: ElevatedButton.styleFrom(
          backgroundColor: backgroundColor,
          foregroundColor: textColor,
          elevation: 1,
          padding: const EdgeInsets.symmetric(
            horizontal: 24,
            vertical: 16,
          ),
        ),
        child: Row(
          children: [
            if (icon is IconData)
              Icon(icon)
            else if (icon is String)
              SvgPicture.asset(
                icon,
                width: 24,
                height: 24,
                colorFilter: ColorFilter.mode(textColor, BlendMode.srcIn),
              ),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                'Continue with $label',
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
            if (isLoading)
              const SizedBox(
                height: 20,
                width: 20,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                ),
              ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('OAuth Example'),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'External Wallet Authentication',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 12),
              const Text(
                'Example implementation of external wallet authentication using Capsule SDK with various providers.',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.black87,
                ),
              ),
              const SizedBox(height: 48),
              _buildExternalWalletButton(
                provider: ExternalWalletProvider.phantom,
                label: 'Phantom',
                icon: FontAwesomeIcons.google,
                backgroundColor: const Color(0xFF4285F4),
                textColor: Colors.white,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
