import NextAuth from "next-auth";
import { type NextRequest, NextResponse } from "next/server";
import { authConfig } from "~/lib/auth.config";
import { PUBLIC_ROUTES, ROOT } from "./lib/middleware/route.middleware";
const { auth } = NextAuth(authConfig);

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const session = await auth();

  const isAuthenticated = !!session?.user;

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ??
    nextUrl.pathname === ROOT;
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
