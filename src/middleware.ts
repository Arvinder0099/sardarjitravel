import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isAdminDomain = hostname.startsWith('admin.') || hostname.includes('admin-zxpoc');
  
  // If admin domain and trying to access public homepage, redirect to admin login
  if (isAdminDomain && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/admin-login', request.url));
  }
  
  // If public domain and trying to access admin routes, block
  if (!isAdminDomain && (
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/admin')
  )) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
