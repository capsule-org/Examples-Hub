import 'package:capsule/capsule.dart';
import 'package:capsule_phantom_connector/phantom_wallet_connector.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:capsule_metamask_connector/capsule_metamask_connector.dart';

final environment = dotenv.env['CAPSULE_ENV'] ?? 'beta';
final apiKey = dotenv.env['CAPSULE_API_KEY'] ??
    (throw Exception('CAPSULE_API_KEY not found in .env file'));

final capsuleClient = Capsule(
  environment:
      environment == 'sandbox' ? Environment.sandbox : Environment.beta,
  apiKey: apiKey,
);

final phantomConnector = CapsulePhantomConnector(
    capsule: capsuleClient,
    appUrl: "https://usecapsule.com",
    deepLink: "capsuleflutter");

final metamaskConnector = CapsuleMetaMaskConnector(
    capsule: capsuleClient,
    appUrl: "https://usecapsule.com",
    deepLink: "capsuleflutter");
