## NextJS Example

This example demonstrates how to integrate the Capsule SDK with a NextJS application. It includes authentication methods
and signing capabilities using various connector libraries.

### Running the Example

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Configure the required variables in `.env`
3. Run the development server:
   ```bash
   yarn dev
   ```

### Environment Variables

- `NEXT_PUBLIC_CAPSULE_API_KEY`: Your Capsule API key (required)
- `NEXT_PUBLIC_ALCHEMY_API_KEY`: Your Alchemy API key (optional)
- `NEXT_PUBLIC_ALCHEMY_GAS_POLICY_ID`: Your Alchemy Gas Policy ID (optional)

Note: The Alchemy-related variables (`NEXT_PUBLIC_ALCHEMY_API_KEY` and `NEXT_PUBLIC_ALCHEMY_GAS_POLICY_ID`) are only
required if you select Alchemy as the signer when configuring your project. If you're not using Alchemy, you can leave
these fields blank or omit them entirely.

### Key Areas to Focus On

When working with this example, developers should focus on the `app/auth` and `app/signing` folders. These folders
contain referenceable code for different authentication and signing methods, which can be copied and adapted depending
on the auth and signer you want to use.

#### Authentication Methods (`app/capsule-essential/authentication`)

- [AuthWithCapsuleModal.tsx](app/capsule-essential/authentication/with-capsule-modal.tsx)
- [AuthWithCosmosKit.tsx](app/capsule-essential/authentication/with-cosmos-kit.tsx)
- [AuthWithEmail.tsx](app/capsule-essential/authentication/with-email.tsx)
- [AuthWithGraz.tsx](app/capsule-essential/authentication/with-graz.tsx)
- [AuthWithLeapSocial.tsx](app/capsule-essential/authentication/with-leap-social.tsx)
- [AuthWithOAuth.tsx](app/capsule-essential/authentication/with-oauth.tsx)
- [AuthWithPhone.tsx](app/capsule-essential/authentication/with-phone.tsx)
- [AuthWithPreGen.tsx](app/capsule-essential/authentication/with-pregen.tsx)
- [AuthWithRainbowkit.tsx](app/capsule-essential/authentication/with-rainbowkit.tsx)
- [AuthWithWagmi.tsx](app/capsule-essential/authentication/with-wagmi.tsx)
- [AuthWithWeb3Onboard.tsx](app/capsule-essential/authentication/with-web3-onboard.tsx)

#### Signing Methods (`app/capsule-essential/signers`)

- [SignWithCapsule.tsx](app/capsule-essential/signers/with-capsule-client.tsx)
- [SignWithCosmJS.tsx](app/capsule-essential/signers/with-cosmjs.tsx)
- [SignWithEthers.tsx](app/capsule-essential/signers/with-ethers.tsx)
- [SignWithSolanaWeb3.tsx](app/capsule-essential/signers/with-solana-web3.tsx)
- [SignWithViem.tsx](app/capsule-essential/signers/with-viem.tsx)

These files provide a variety of ways to authenticate users and sign transactions, each tailored to different tools and
platforms. Explore them to understand how Capsule SDK integrates with various web3 services.
