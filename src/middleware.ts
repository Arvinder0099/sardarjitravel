import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    // Only protect routes when SITE_ROLE is 'admin'
    const siteRole = process.env.SITE_ROLE;
    
    if (siteRole !== 'admin') {
      return NextResponse.next();
    }

    // Allow access to login page
    if (request.nextUrl.pathname === '/admin-login') {
      return NextResponse.next();
    }

    // Check if user is authenticated
    const authCookie = request.cookies.get('admin-authenticated');
    
    // If not authenticated, redirect to login
    if (!authCookie?.value || authCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|admin-login).*)'],
};
