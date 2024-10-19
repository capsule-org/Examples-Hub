## React Vite Example

This example demonstrates how to integrate the Capsule SDK with a React application using Vite as the build tool.

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

- `VITE_CAPSULE_API_KEY`: Your Capsule API key (required)
- `VITE_ALCHEMY_API_KEY`: Your Alchemy API key (optional)
- `VITE_ALCHEMY_GAS_POLICY_ID`: Your Alchemy Gas Policy ID (optional)

Note: The Alchemy-related variables (`VITE_ALCHEMY_API_KEY` and `VITE_ALCHEMY_GAS_POLICY_ID`) are only required if you
select Alchemy as the signer when configuring your project. If you're not using Alchemy, you can leave these fields
blank or omit them entirely.

### Key Areas to Focus On

When working with this example, developers should focus on the `src/auth` and `src/signing` folders. These folders
contain referenceable code for different authentication and signing methods, which can be copied and adapted depending
on the auth and signer you want to use.

#### Authentication Methods (`src/auth`)

- [AuthWithCapsuleModal.tsx](src/auth/AuthWithCapsuleModal.tsx)
- [AuthWithCosmosKit.tsx](src/auth/AuthWithCosmosKit.tsx)
- [AuthWithEmail.tsx](src/auth/AuthWithEmail.tsx)
- [AuthWithGraz.tsx](src/auth/AuthWithGraz.tsx)
- [AuthWithLeapSocial.tsx](src/auth/AuthWithLeapSocial.tsx)
- [AuthWithOAuth.tsx](src/auth/AuthWithOAuth.tsx)
- [AuthWithPhone.tsx](src/auth/AuthWithPhone.tsx)
- [AuthWithPreGen.tsx](src/auth/AuthWithPreGen.tsx)
- [AuthWithRainbowkit.tsx](src/auth/AuthWithRainbowkit.tsx)
- [AuthWithWagmi.tsx](src/auth/AuthWithWagmi.tsx)
- [AuthWithWeb3Onboard.tsx](src/auth/AuthWithWeb3Onboard.tsx)

#### Signing Methods (`src/signing`)

- [SignWithCapsule.tsx](src/signing/SignWithCapsule.tsx)
- [SignWithCosmJS.tsx](src/signing/SignWithCosmJS.tsx)
- [SignWithEthers.tsx](src/signing/SignWithEthers.tsx)
- [SignWithSolanaWeb3.tsx](src/signing/SignWithSolanaWeb3.tsx)
- [SignWithViem.tsx](src/signing/SignWithViem.tsx)

These files provide a variety of ways to authenticate users and sign transactions, each tailored to different tools and
platforms. Explore them to understand how Capsule SDK integrates with various web3 services.
