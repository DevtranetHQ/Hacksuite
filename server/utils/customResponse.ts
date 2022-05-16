import { formatMessage } from "./formatMessage";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export class CustomResponse<T = any> {
  /**
   * Create custom response
   *
   * @param {number} status HTTP status code
   * @param {string} message Response message
   * @param {*} data Data to be returned
   */
  constructor(public status: number, public message: string, public data?: T) {
    this.message = formatMessage(message);
  }
}

/**
 * Handler result returned by controller methods and returns an HTTP response
 * @param {NextApiRequest} req HTTP request object
 * @param {NextApiResponse} res HTTP response object
 * @param {*} result Controller result
 */
export function handleResponse(req: NextApiRequest, res: NextApiResponse, result: any) {
  if (result instanceof CustomResponse) {
    res.status(result.status).json(result);
  } else {
    res.status(200).json(result);
  }
}
