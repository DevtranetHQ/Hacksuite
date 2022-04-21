import { handleAuth } from "../utils/auth";
import { middlewareLogger } from "./../utils/debug";

/**
 * Decodes the token and calls the next handler with the user object in `req.$user`.
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withAuth(handler) {
    return async (req, res) => {
        middlewareLogger(`withAuth(${handler.name})`);
        try {
            const decoded = await handleAuth(req, res);
            req.$user = decoded;
        } finally {
            return handler(req, res);
        }
    };
}
