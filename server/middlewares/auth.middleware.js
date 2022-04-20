import JWT from "jsonwebtoken";
import { config } from "./../config";

const { JWT_SECRET } = config;

/**
 * Decodes the token and calls the next handler with the user object in `req.$user`
 * @param {Function} handler Handler function
 * @returns Composed handler function
 */
export function withAuth(handler) {
    return (req, res) => {
        const token = req.cookies.token;

        if (!token) return handler(req, res);

        const decoded = JWT.verify(token, JWT_SECRET);

        req.$user = decoded;

        return handler(req, res);
    };
}
