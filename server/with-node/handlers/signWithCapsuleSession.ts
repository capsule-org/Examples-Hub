import type { Request, Response, NextFunction } from "express";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";
import type { RequestBody } from "../types";

interface CapsuleSessionRequestBody extends RequestBody {
  session: string;
}

/**
 * Handles signing with Capsule Session.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | void>} - The response indicating the session was processed.
 */
export const signWithCapsuleSession = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | void> => {
  try {
    // Validate Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("Unauthorized");
    }

    // Use your own token verification logic here
    const token = authHeader.split(" ")[1];
    const user = simulateVerifyToken(token);
    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    // Parse and validate request body
    const { email, session } = req.body as CapsuleSessionRequestBody;
    if (!email || !session) {
      return res.status(400).send("Email and session are required");
    }
    if (user.email !== email) {
      return res.status(403).send("Forbidden");
    }

    // Ensure CAPSULE_API_KEY is available
    const CAPSULE_API_KEY = process.env.CAPSULE_API_KEY;
    if (!CAPSULE_API_KEY) {
      return res.status(500).send("CAPSULE_API_KEY not set");
    }

    // Initialize Capsule client and import session
    const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);
    await capsuleClient.importSession(session);

    // Capsule client can now be used to sign transactions, etc., with the session imported.
    return res.status(200).send("signWithCapsuleSession");
  } catch (error) {
    console.error("Error in signWithCapsuleSession:", error);
    return next(error);
  }
};
