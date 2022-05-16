import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export class CustomError extends Error {
  /**
   * Create custom error
   *
   * @param {string} message Error message for request response
   * @param {number} status HTTP status code. Default is 400
   */
  constructor(public message: string, public status: number = 400) {
    super(message);
  }
}

/**
 * Handles thrown errors in controller functions and returns an error HTTP response
 * @param {NextApiRequest} req HTTP request object
 * @param {NextApiResponse} res HTTP response object
 * @param {Error} error Error object
 */
export function handleError(req: NextApiRequest, res: NextApiResponse, error: Error) {
  console.error(error);
  if (error instanceof CustomError) {
    res.status(error.status).send({ message: error.message });
    return;
  }

  if (invalidRequestErrorNames.includes(error.constructor.name)) {
    res.status(400).send({ message: error.message });
    return;
  }

  res.status(500).send({ message: error.message });
  return;
}

const invalidRequestErrorNames = [
  "CastError",
  "JsonWebTokenError",
  "ValidationError",
  "SyntaxError",
  "MongooseError",
  "MongoError"
];
