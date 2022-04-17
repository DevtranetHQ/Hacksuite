import { NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

export function middleware(req) {
    const token = req.cookies.token;
    if (token) {
        const user = jwt_decode(token);

        const completePage = `${req.nextUrl.origin}/app/complete`;

        if (!user.isCompleted && req.url !== completePage) {
            return NextResponse.redirect(completePage);
        }

        return NextResponse.next();
    }

    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
}
