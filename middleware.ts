import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();


  const protectedRoutes = [
    "/dashboard",
    "/athletes",
  ];


  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );


  if (isProtectedRoute && !session) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard/:path*",
    "/athletes/:path*",
  ],
};