import 'package:capsule/capsule.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

final environment = dotenv.env['CAPSULE_ENV'] ?? 'beta';
final apiKey = dotenv.env['CAPSULE_API_KEY'] ??
    (throw Exception('CAPSULE_API_KEY not found in .env file'));

final capsuleClient = Capsule(
  environment:
      environment == 'sandbox' ? Environment.sandbox : Environment.beta,
  apiKey: apiKey,
);
