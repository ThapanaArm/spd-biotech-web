import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken, type Session } from "./auth";

/** Reads and verifies the admin session from cookies (server components / route handlers). */
export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}
