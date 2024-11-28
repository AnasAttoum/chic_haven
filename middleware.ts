import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const unProtectedRoutes = [
  "/auth/login",
  "/auth/signup",
];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req:request, secret: process.env.NEXTAUTH_SECRET });

  if (token && unProtectedRoutes.some((route) => request.url.includes(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  else if (!token && !unProtectedRoutes.some((route) => request.url.includes(route))) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|chic_haven.svg).*)",
  ],
};