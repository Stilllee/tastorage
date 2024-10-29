import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get("adminToken");

  if (request.nextUrl.pathname === "/admin/login" && adminToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    (request.nextUrl.pathname === "/new" ||
      request.nextUrl.pathname.startsWith("/edit")) &&
    !adminToken
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/login", "/new", "/edit/:path*"],
};
