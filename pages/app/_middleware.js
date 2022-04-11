import { NextResponse } from "next/server";

export function middleware(req) {
    console.log(req.cookies);
    if (req.cookies.token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
}
