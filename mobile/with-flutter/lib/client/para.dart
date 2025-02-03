import 'package:para/para.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:para_metamask_connector/para_metamask_connector.dart';
import 'package:para_phantom_connector/para_phantom_connector.dart';

final environment = dotenv.env['CAPSULE_ENV'] ?? 'beta';
final apiKey = dotenv.env['CAPSULE_API_KEY'] ??
    (throw Exception('CAPSULE_API_KEY not found in .env file'));

final paraClient = Para(
  environment:
      environment == 'sandbox' ? Environment.sandbox : Environment.beta,
  apiKey: apiKey,
);

final phantomConnector = ParaPhantomConnector(
    para: paraClient,
    appUrl: "https://usecapsule.com",
    deepLink: "capsuleflutter");

final metamaskConnector = ParaMetaMaskConnector(
    para: paraClient,
    appUrl: "https://usecapsule.com",
    deepLink: "capsuleflutter");
