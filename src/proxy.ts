// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value ?? null;

  // Rutas protegidas
  const protectedPaths = ["/dashboard", "/transactions", "/profile"];
  const isProtected = protectedPaths.some((p) =>
    url.pathname.startsWith(p)
  );

  // Si no hay token y trata de entrar en rutas privadas → login
  if (isProtected && !token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/transactions/:path*", "/profile/:path*"],
};
