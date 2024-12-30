import { type NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { PUBLIC_ROUTES, ROOT } from "./middleware/route.middleware";
const { auth } = NextAuth(authConfig);

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const session = await auth();

  const isAuthenticated = !!session?.user;

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ??
    nextUrl.pathname === ROOT;

  console.log("Is this publicRoute", isPublicRoute, nextUrl.pathname);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
