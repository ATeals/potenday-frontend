import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get("access_token");

  if (!cookie) return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.png|login).*)"],
};
