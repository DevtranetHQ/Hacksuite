import cors from "cors";
import { withMiddleware } from "./../utils/withMiddleware";

export const withCors = handler => {
  return withMiddleware(cors(), handler);
};
