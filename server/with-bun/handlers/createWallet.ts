// Import required modules
import { Capsule as CapsuleServer, Environment, WalletType, PregenIdentifierType } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";
import { encrypt } from "../utils/encryption-utils";
import { setKeyShareInDB } from "../db/keySharesDB";

interface RequestBody {
  email: string;
}

export const createWallet = async (req: Request): Promise<Response> => {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  // Simulate verifying the token. In a real app, you would verify a JWT token.
  const user = simulateVerifyToken(token);

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { email } = (await req.json()) as RequestBody;

  if (user.email !== email) {
    return new Response("Forbidden", { status: 403 });
  }

  const CAPSULE_API_KEY = Bun.env.CAPSULE_API_KEY;

  if (!CAPSULE_API_KEY) {
    return new Response("CAPSULE_API_KEY not set", { status: 500 });
  }

  const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);

  const hasPregenWallet = await capsuleClient.hasPregenWallet(email);

  if (hasPregenWallet) {
    return new Response("Wallet already exists", { status: 400 });
  }

  const wallet = await capsuleClient.createWalletPreGen(WalletType.EVM, email, PregenIdentifierType.EMAIL);

  if (!wallet) {
    return new Response("Failed to create wallet", { status: 500 });
  }

  const keyShare = capsuleClient.getUserShare();

  if (!keyShare) {
    return new Response("Failed to get key share", { status: 500 });
  }

  const encryptedKeyShare = encrypt(keyShare);

  await setKeyShareInDB(email, encryptedKeyShare);

  return new Response(`Wallet created for ${email}`, { status: 201 });
};
