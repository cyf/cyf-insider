import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && path === "/form") {
    return NextResponse.redirect(new URL("/signin", req.url));
  } else if (session && path === "/signin") {
    return NextResponse.redirect(new URL("/form", req.url));
  }
  return NextResponse.next();
}
