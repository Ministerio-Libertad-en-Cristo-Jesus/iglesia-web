import { COOKIE_NAME } from "@/app/constants";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value || ''
  try {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET || ''
    const verifiedToken = await jwtVerify(token, new TextEncoder().encode(secret));
    // Si el token no es válido, redirigir al login

    if(!verifiedToken && !request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const payload = verifiedToken.payload;
    // Si existe el token y el rol es lider, redirigir al leader
    if(request.nextUrl.pathname.startsWith('/login') && payload.role === 'lider') {
      return NextResponse.redirect(new URL("/leader", request.url));
    }
    // Si existe el token y el rol es pastor, redirigir al dashboard
    if(request.nextUrl.pathname.startsWith('/login') && payload.role === 'pastor') {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    // Si el usuario es lider y quiere acceder a la ruta /dasboard, redirigir a la ruta /leader
    if(request.nextUrl.pathname.startsWith('/dashboard') && payload.role === 'lider') {
      return NextResponse.redirect(new URL("/leader", request.url));
    }
    // Si el usuario es pastor y quiere acceder a la ruta /leader, redirigir a la ruta /dashboard
    if(request.nextUrl.pathname.startsWith('/leader') && payload.role === 'pastor') {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/leader/:path*", "/login"],
};
