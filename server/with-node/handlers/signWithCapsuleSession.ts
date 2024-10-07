import type { Request, Response, NextFunction } from "express";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";

interface RequestBody {
  email: string;
  session: string;
}

export const signWithCapsuleSession = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("Unauthorized");
    }

    const token = authHeader.split(" ")[1];
    const user = simulateVerifyToken(token);

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const { email, session } = req.body as RequestBody;

    if (!email || !session) {
      return res.status(400).send("Email and session are required");
    }

    if (user.email !== email) {
      return res.status(403).send("Forbidden");
    }

    const CAPSULE_API_KEY = process.env.CAPSULE_API_KEY;

    if (!CAPSULE_API_KEY) {
      return res.status(500).send("CAPSULE_API_KEY not set");
    }

    const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);

    // Import the session exported from the client.
    await capsuleClient.importSession(session);

    return res.status(200).send("signWithCapsuleSession");
  } catch (error) {
    console.error("Error in signWithCapsuleSession:", error);
    return next(error);
  }
};
