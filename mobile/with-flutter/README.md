# Capsule SDK Flutter Integration

The Capsule SDK for Flutter allows you to easily integrate secure and scalable wallet functionalities into your mobile applications. This example project demonstrates how to integrate the Capsule SDK into a Flutter application. With Capsule, you can implement features such as:

- User creation and authentication
- Passkey generation and management
- Secure message signing
- Transaction signing and sending
- Wallet creation and management

For more detailed information about the Capsule SDK and its capabilities, please visit our comprehensive documentation at [docs.usecapsule.com](https://docs.usecapsule.com).

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   flutter pub get
   ```
3. Run the app:
   ```
   flutter run
   ```

## Initializing Capsule SDK

To use the Capsule SDK in your Flutter app, first initialize it in your `main.dart` file:

```dart
import 'package:capsule/capsule.dart';

void main() {
  const String capsuleApiKey = 'YOUR_API_KEY_HERE';
  const environment = Environment.beta;

  final capsule = Capsule(
    environment: environment,
    apiKey: capsuleApiKey,
  )..init();

  runApp(MyApp(capsule: capsule));
}
```

## Key Methods for Authentication

### User Creation

To create a new user:

```dart
await capsule.createUser(email);
```

This initiates the verification process and sends an email to the user.

### Email Verification

After the user receives the verification code:

```dart
String biometricsId = await capsule.verifyEmail(verificationCode);
```

### Generating Passkey

Generate a passkey for the user:

```dart
await capsule.generatePasskey(email, biometricsId);
```

### User Login

To log in an existing user:

```dart
final wallet = await capsule.login();
```

This method returns the user's wallet information upon successful authentication.

### Signing Messages

To sign a message using the authenticated user's wallet:

```dart
final base64message = base64.encode(utf8.encode(messageToSign));
final signatureResponse = await capsule.signMessage(
  walletId: walletId,
  messageBase64: base64message
) as SuccessfulSignatureResult;
```

## Full Example

For a complete implementation example, refer to the `lib/passkey_auth_example.dart` file in this project. It provides a comprehensive demonstration of user creation, authentication, and message signing using the Capsule SDK.

## Coming Soon

- Examples for working with Solana
- Phone number authentication as an alternative to email

## Additional Methods

The Capsule SDK provides several other methods for wallet management and transaction signing. Refer to the `lib/capsule.dart` file for a complete list of available methods and their usage.
