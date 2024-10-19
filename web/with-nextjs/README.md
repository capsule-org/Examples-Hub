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

#### Authentication Methods (`app/auth`)

- [AuthWithCapsuleModal.tsx](app/auth/AuthWithCapsuleModal.tsx)
- [AuthWithCosmosKit.tsx](app/auth/AuthWithCosmosKit.tsx)
- [AuthWithEmail.tsx](app/auth/AuthWithEmail.tsx)
- [AuthWithGraz.tsx](app/auth/AuthWithGraz.tsx)
- [AuthWithLeapSocial.tsx](app/auth/AuthWithLeapSocial.tsx)
- [AuthWithOAuth.tsx](app/auth/AuthWithOAuth.tsx)
- [AuthWithPhone.tsx](app/auth/AuthWithPhone.tsx)
- [AuthWithPreGen.tsx](app/auth/AuthWithPreGen.tsx)
- [AuthWithRainbowkit.tsx](app/auth/AuthWithRainbowkit.tsx)
- [AuthWithWagmi.tsx](app/auth/AuthWithWagmi.tsx)
- [AuthWithWeb3Onboard.tsx](app/auth/AuthWithWeb3Onboard.tsx)

#### Signing Methods (`app/signing`)

- [SignWithCapsule.tsx](app/signing/SignWithCapsule.tsx)
- [SignWithCosmJS.tsx](app/signing/SignWithCosmJS.tsx)
- [SignWithEthers.tsx](app/signing/SignWithEthers.tsx)
- [SignWithSolanaWeb3.tsx](app/signing/SignWithSolanaWeb3.tsx)
- [SignWithViem.tsx](app/signing/SignWithViem.tsx)

These files provide a variety of ways to authenticate users and sign transactions, each tailored to different tools and
platforms. Explore them to understand how Capsule SDK integrates with various web3 services.
