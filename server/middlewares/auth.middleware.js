import { jwtVerify } from "jose";
import { config } from "./../config";

const { JWT_SECRET } = config;

/**
 * Decodes the token and calls the next handler with the user object in `req.$user`
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withAuth(handler) {
    return async (req, res) => {
        const token = req.cookies.token;

        if (!token) return handler(req, res);

        try {
            const decoded = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
            req.$user = decoded;
        } finally {
            return handler(req, res);
        }
    };
}
