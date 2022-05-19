import { NextApiHandler } from "next";
import helmet from "helmet";
import morgan from "morgan";
import { withMiddleware } from "../utils/withMiddleware";
import { middlewareLogger } from "../utils/debug";

export const withPreRouteHandlers = (handler: NextApiHandler): NextApiHandler => {
  return (req, res) => {
    middlewareLogger(`withPreRouteHandlers(${handler.name})`);
    return withMiddleware(helmet(), withMiddleware(morgan("common"), handler))(req, res);
  };
};
