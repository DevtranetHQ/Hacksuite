import { NextApiRequest } from 'next';
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { config } from "../config";

const { JWT_SECRET } = config;

export interface IPayload {
  id: string
  role: string
  firstName: string
  lastName: string
  isCompleted: boolean
}

/**
 * Parses the token from the cookie and returns the payload.
 */
export async function handleAuth(req: NextApiRequest): Promise<IPayload> {
  const token = req.cookies.token;
  if (!token) throw new Error("No token found");

  try {
    const payload = await decodeToken(token);
    return payload;
  } catch (err) {
    throw new Error("Invalid token");
  }
}

export async function signToken(payload: IPayload) {
  const token = await new SignJWT(payload as unknown as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(JWT_SECRET));

  return token;
}

export async function decodeToken(token: string) {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
  return payload as unknown as IPayload;
}
