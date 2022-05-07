import { NextApiRequest, NextApiResponse } from "next";
import { handleAuth, IPayload } from "../utils/auth";
import { middlewareLogger } from "../utils/debug";

export type RequestWithUser<Body = any> = NextApiRequest & { $user?: IPayload; body?: Body };
type HandlerWithUser<T> = (req: RequestWithUser, res: NextApiResponse) => T | Promise<T>;

/**
 * Decodes the token and calls the next handler with the user object in `req.$user`.
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withAuth<T>(handler: HandlerWithUser<T>): HandlerWithUser<T> {
  return async (req, res) => {
    middlewareLogger(`withAuth(${handler.name})`);
    try {
      const decoded = await handleAuth(req);
      req.$user = decoded;
    } finally {
      return handler(req, res);
    }
  };
}
