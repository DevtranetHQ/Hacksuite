import cors from "cors";
import { NextApiHandler } from "next";
import { withMiddleware } from "../utils/withMiddleware";

export const withCors = (handler: NextApiHandler): NextApiHandler => {
  return withMiddleware(cors(), handler);
};
