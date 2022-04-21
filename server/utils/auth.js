import { jwtVerify } from "jose";

export async function handleAuth(req) {
    const token = req.cookies.token;

    if (!token) throw new Error("No token found");

    try {
        const user = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));

        req.user = user;
    } catch (err) {
        throw new Error("Invalid token");
    }
}
