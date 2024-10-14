export function simulateVerifyToken(token: string): { email: string } | null {
  try {
    const match = token.match(/^([^.]+)\.(.+)$/);
    if (!match) {
      return null;
    }

    const [, prefix, email] = match;

    if (prefix !== "SIMULATED" || !email) {
      return null;
    }
    return { email };
  } catch (e) {
    console.error(e);
    return null;
  }
}
