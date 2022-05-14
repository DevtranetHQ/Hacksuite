import { NextApiHandler } from "next";
import { IncomingMessage, ServerResponse } from "http";
import { middlewareLogger } from "./debug";

export type ExpressMiddleware = (
  req: IncomingMessage,
  res: ServerResponse,
  callback: (err?: unknown) => void
) => void;

/**
 * Composes handler function with express style middleware.
 * @param middleware Express middleware function
 * @param handler Request handler function to compose with
 * @returns Composed handler function
 */
export function withMiddleware(
  middleware: ExpressMiddleware,
  handler: NextApiHandler
): NextApiHandler {
  return function (req, res) {
    middlewareLogger(`withMiddleware(${middleware.name}, ${handler.name})`);
    return middleware(req, res, result => {
      if (result instanceof Error) {
        throw result;
      }

      return handler(req, res);
    });
  };
}
