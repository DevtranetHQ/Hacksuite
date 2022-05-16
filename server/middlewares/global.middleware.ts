import { NextApiHandler } from "next";
import { HandlerWithResponse, withErrorAndResponse } from "./response.middleware";
import { withTrimIncomingRequests } from "./trim-incoming-requests.middleware";
import { withPreRouteHandlers } from "./pre-route.middleware";
import { middlewareLogger } from "../utils/debug";

/**
 * Adds all the global middlewares to the handler
 * @param handler Handler function
 * @returns Composed handler function
 */
export function withGlobalMiddleware(handler: HandlerWithResponse): NextApiHandler {
  return (req, res) => {
    middlewareLogger(`withGlobalMiddleware(${handler.name})`);
    return withPreRouteHandlers(withTrimIncomingRequests(withErrorAndResponse(handler)))(req, res);
  };
}
