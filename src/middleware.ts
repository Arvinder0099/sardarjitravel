import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect routes when SITE_ROLE is 'admin'
  const siteRole = process.env.SITE_ROLE;
  
  if (siteRole !== 'admin') {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const authCookie = request.cookies.get('admin-authenticated');
  
  // If trying to access login page, allow it
  if (request.nextUrl.pathname === '/admin-login') {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!authCookie || authCookie.value !== 'true') {
    return NextResponse.redirect(new URL('/admin-login', request.url));
  }

  // If authenticated and on homepage, redirect to dashboard
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|admin-login).*)'],
};
