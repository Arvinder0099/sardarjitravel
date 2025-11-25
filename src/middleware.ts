import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  
  // Only handle admin domain homepage redirect
  const isAdminDomain = hostname.startsWith('admin.') || hostname.includes('admin-zxpoc');
  
  if (isAdminDomain && pathname === '/') {
    return NextResponse.redirect(new URL('/admin-login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
