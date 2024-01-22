import { COOKIE_NAME } from "@/app/constants";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value
  try {
    if(!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET || ''
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    if(request.nextUrl.pathname.startsWith('/dashboard') && payload.role === 'lider') {
      return NextResponse.redirect(new URL("/leader", request.url));
    }
    if(request.nextUrl.pathname.startsWith('/leader') && payload.role === 'pastor') {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/leader/:path*"],
};
