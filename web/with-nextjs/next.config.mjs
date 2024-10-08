/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@usecapsule/rainbowkit",
    "@usecapsule/rainbowkit-wallet",
    "@usecapsule/core-components",
    "@usecapsule/react-components",
    "@usecapsule/react-sdk",
    "@usecapsule/core-sdk",
    "@usecapsule/web-sdk",
    "@usecapsule/wagmi-v2-integration",
    "@usecapsule/viem-v2-integration",
    "@usecapsule/shared-examples",
  ],
};

export default nextConfig;
