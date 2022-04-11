import { NextResponse } from "next/server";

export function middleware(req) {
    if (req.cookies.token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
}
