import { withErrorAndResponse } from "./response.middleware";
import { withTrimIncomingRequests } from "./trim-incoming-requests.middleware";
import { withPreRouteHandlers } from "./pre-route.middleware";

/**
 * Adds all the global middlewares to the handler
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withGlobalMiddleware(handler) {
    return withPreRouteHandlers(withTrimIncomingRequests(withErrorAndResponse(handler)));
}
