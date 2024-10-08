## Bun Server Example

This example demonstrates how to integrate the Capsule SDK with a Bun server. The server includes routes for wallet
creation and signing using different libraries.

### Running the Example

1. Install dependencies:
   ```bash
   bun install
   ```
2. Start the server:
   ```bash
   bun dev
   ```

Alternatively, you can run the server directly:

```bash
bun run server.ts
```

Ensure that you configure the `.env` file using `.env.example`.

### Available Routes

The server starts on port `8000`, and the following routes are available for interacting with the wallet functionality.
Each route requires an `email` in the body of the request.

- **Create Wallet**

  ```bash
  curl -X POST http://localhost:8000/wallets/create -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with Capsule Pre-Generated Wallet**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/capsulePreGen -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with Capsule Session**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/capsuleSession -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with Ethers**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/ethers -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with Viem**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/viem -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with CosmJS**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/cosmjs -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with Solana Web3**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/solana-web3 -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

- **Sign with Alchemy**

  ```bash
  curl -X POST http://localhost:8000/wallets/sign/alchemy -H "Content-Type: application/json" -d '{"email": "user@example.com"}'
  ```

For more details, visit the [Capsule SDK documentation](https://docs.usecapsule.com/welcome).
