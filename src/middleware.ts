import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    const siteRole = process.env.SITE_ROLE || 'public';
    const url = request.nextUrl.clone();
    
    // If this is ADMIN app, block access to public pages
    if (siteRole === 'admin') {
      // Allow: admin pages, admin-login, api, _next, static files
      const allowedPaths = ['/admin', '/dashboard', '/admin-login', '/api', '/_next', '/public'];
      const isAllowed = allowedPaths.some(path => url.pathname.startsWith(path));
      
      if (!isAllowed && url.pathname !== '/') {
        // Redirect non-admin pages to login
        if (url.pathname !== '/admin-login') {
          return NextResponse.redirect(new URL('/admin-login', request.url));
        }
      }
    }
    
    // If this is PUBLIC app, block access to admin pages
    if (siteRole === 'public') {
      if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
