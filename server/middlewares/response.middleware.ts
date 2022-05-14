import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { handleResponse } from "../utils/customResponse";
import { handleError } from "../utils/customError";
import { middlewareLogger } from "../utils/debug";

export type HandlerWithResponse<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => T | Promise<T>;

export const withErrorAndResponse = (handler: HandlerWithResponse): NextApiHandler => {
  return async (req, res) => {
    middlewareLogger(`withErrorAndResponse(${handler.name})`);
    try {
      const result = await handler(req, res);
      return handleResponse(req, res, result);
    } catch (error) {
      return handleError(req, res, error);
    }
  };
};
