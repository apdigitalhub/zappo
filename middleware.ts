import { NextResponse, type NextRequest } from "next/server";
import { securityHeaders } from "@/lib/security/headers";
export function middleware(request: NextRequest) { const response = NextResponse.next(); for (const [key, value] of Object.entries(securityHeaders)) response.headers.set(key, value); const protectedPath = request.nextUrl.pathname.startsWith("/dashboard"); const hasSession = request.cookies.has("authjs.session-token") || request.cookies.has("__Secure-authjs.session-token"); if (protectedPath && !hasSession && process.env.NODE_ENV === "production") return NextResponse.redirect(new URL("/login", request.url)); return response; }
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.svg).*)"] };
