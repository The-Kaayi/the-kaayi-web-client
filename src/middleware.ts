import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const loggedIn = request.cookies.get("loggedIn")?.value === "true";
  const protectedRoutes: string[] = ["/admin-panel"];

  const authRoutes = ["login", "signup", "forgot-password", "reset-password"];

  const loginUrl = process.env.NEXT_AUTH_LOGIN_URL;

  const isProtectedRoute: boolean = protectedRoutes.some((route) =>
    request.nextUrl.pathname.includes(route)
  );

  const isAuthRoutes: boolean = authRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const isRootPath: boolean = request.nextUrl.pathname === "/";

  if ((isProtectedRoute || isRootPath) && !loggedIn) {
    return NextResponse.redirect(`${loginUrl}/login`);
  }

  if (isAuthRoutes && loggedIn) {
    return NextResponse.redirect(`${loginUrl}/admin-panel`);
  }
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
