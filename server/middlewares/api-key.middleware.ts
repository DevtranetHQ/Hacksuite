import { CustomError } from "./../utils/customError";
import { config } from "../config";
import { middlewareLogger } from "../utils/debug";
import { HandlerWithResponse } from "./response.middleware";

const { apiKey } = config;

/**
 * Secures handler with x-api-key header.
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withApiKey(handler: HandlerWithResponse): HandlerWithResponse {
  return (req, res) => {
    middlewareLogger(`withApiKey(${handler.name})`);
    if (req.headers["x-api-key"] !== apiKey) {
      throw new CustomError("Unauthorized", 401);
    }

    return handler(req, res);
  };
}
