import { NextApiRequest, NextApiResponse } from "next";
import { handleAuth, IPayload } from "../utils/auth";
import { middlewareLogger } from "../utils/debug";
import { CustomError } from "./../utils/customError";

export type RequestWithUser<B = any, P = any> = NextApiRequest & {
  $user?: IPayload;
  body?: B;
  query?: P;
};
type HandlerWithUser<T> = (req: RequestWithUser, res: NextApiResponse) => T | Promise<T>;

/**
 * Decodes the token and calls the next handler with the user object in `req.$user`.
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withAuth<T>(handler: HandlerWithUser<T>, authRequired = false): HandlerWithUser<T> {
  return async (req, res) => {
    middlewareLogger(`withAuth(${handler.name})`);
    try {
      const decoded = await handleAuth(req);
      req.$user = decoded;
    } finally {
      if (authRequired && !req.$user) {
        throw new CustomError("Unauthorized", 401);
      }
      return handler(req, res);
    }
  };
}
