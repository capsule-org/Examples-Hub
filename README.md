# 📢 Deprecation Notice
This examples repository has been deprecated and is maintained only for reference. Please visit the [examples-hub](https://github.com/getpara/examples-hub) repository for the most current Para examples and implementations.

# ⚠️ Important Notice
We are currently migrating to our new name Para at the github.com/getpara organization. A new examples hub is available with improved examples at https://github.com/getpara/new-examples-hub/. During this transition period, you can reference both example repositories:
- The examples-hub (this repo) uses the legacy @usecapsule/* dependencies
- The new-examples-hub uses the updated @getpara/* dependencies

# Examples Hub

A centralized repository featuring comprehensive Capsule SDK examples. For more details, visit the
[documentation](https://docs.usecapsule.com/welcome) or the [developer portal](https://developer.usecapsule.com/) to get
your API keys.

# Directory

This section provides an overview of the available Capsule SDK examples across different platforms.

## Web

- [NextJS](./web/with-nextjs)
- [PWA Craco](./web/with-pwa-craco)
- [React Craco](./web/with-react-craco)
- [React Vite](./web/with-react-vite)
- Swift: Currently in a [dedicated repo](https://github.com/capsule-org/swift-sdk-example)

Within each of these sections:

- `src/auth/` has examples across connector libraries, OAuth/login methods, and authenticated vs. pre-generated wallets.
- `src/signing/` has examples for popular Cosmos, EVM, and Solana signer libraries as well as Account Abstraction.

To run the examples, navigate to the respective directory and use:

```bash
yarn install
yarn dev
```

Make sure to configure the `.env` file based on the `.env.example` file in each project directory.

Additional web examples can also be found outside this repository:

- [Vue](https://github.com/capsule-org/vue-example)
- [Legacy Web Examples](https://github.com/capsule-org/react-integration-examples)

## Mobile

- [Flutter](./mobile/with-flutter)
- [React Native](./mobile/with-react-native)
- [Expo (React Native)](./mobile/with-expo)

Each of these examples is an app that can be run individually. To run them, navigate into the corresponding directory
and use:

```bash
yarn install
yarn dev
```

Make sure to set up a `.env` file based on the `.env.example` file in each project directory.

## Server

- [Bun](./server/with-bun)
- [Deno](./server/with-deno)
- [Node](./server/with-node)

Within each of these sections, the `handlers/` directory contains examples for signing with pre-generated wallets,
imported sessions, and Account Abstraction.

To run these examples, navigate to the specific directory and use:

```bash
yarn install
yarn dev
```

Make sure to configure the `.env` file based on the `.env.example` file in each project directory.

## Specialized

- [Telegram Web App (TWA)](./specialized/with-telegram-web-app)
- [ElectronJS Desktop App](./specialized/with-electron)

Each of these examples is an app that can be run individually. Follow the same steps as above to run them.

Make sure to configure the `.env` file based on the `.env.example` file in each project directory.
