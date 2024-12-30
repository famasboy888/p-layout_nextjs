import { type NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export async function middleware(req: NextRequest) {
  const session = await auth();
  return NextResponse.redirect(new URL("/dummy", req.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
