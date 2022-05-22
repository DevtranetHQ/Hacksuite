import { NextApiRequest } from "next";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { config } from "../config";
import { UserId } from "../modules/auth/user.model";

const { JWT_SECRET } = config;

export interface IPayload {
  id: string;
  uniqueId: UserId;
  role: string;
  isCompleted: boolean;
}

/**
 * Parses the token from the cookie and returns the payload.
 */
export async function handleAuth(req: NextApiRequest): Promise<undefined | IPayload> {
  const token = req.cookies.token;
  if (!token) return;

  try {
    const payload = await decodeToken(token);
    return payload;
  } catch (err) {
    console.error(err);
    return;
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
