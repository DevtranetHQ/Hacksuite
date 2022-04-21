import { jwtVerify } from "jose";
import { config } from "./../config";

const { JWT_SECRET } = config;

/**
 * Parses the token from the cookie and returns the payload.
 * @param {Requesr} req Request object
 * @returns {Promise<Object>} Decoded JWT
 */
export async function handleAuth(req) {
    const token = req.cookies.token;
    if (!token) throw new Error("No token found");

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return payload;
    } catch (err) {
        throw new Error("Invalid token");
    }
}
