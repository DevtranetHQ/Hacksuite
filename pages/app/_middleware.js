import { NextResponse } from "next/server";
import { withAuth } from "./../../server/middlewares/auth.middleware";

export const middleware = withAuth(req => {
  const user = req.$user;
  if (user) {
    const completePage = `${req.nextUrl.origin}/app/complete`;

    if (!user.isCompleted && !req.url.includes(completePage)) {
      return NextResponse.redirect(completePage);
    }

    return NextResponse.next();
  }

  return NextResponse.redirect(`${req.nextUrl.origin}/login`).clearCookie("token");
});
