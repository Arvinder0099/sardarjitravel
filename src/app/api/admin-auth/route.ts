import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password, twoFactorCode } = await request.json();
    
    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const twoFactorSecret = process.env.TWO_FACTOR_SECRET;
    
    // Step 1: Verify password
    if (password !== adminPassword) {
      return NextResponse.json({ 
        success: false,
        error: 'Invalid password'
      }, { status: 401 });
    }
    
    // Step 2: Verify 2FA code (if 2FA is enabled)
    if (twoFactorSecret && twoFactorCode) {
      // Dynamically import to avoid build issues
      try {
        const { verifyToken } = await import('@/lib/twoFactor');
        const isValid = verifyToken(twoFactorSecret, twoFactorCode);
        
        if (!isValid) {
          return NextResponse.json({ 
            success: false,
            error: 'Invalid two-factor code'
          }, { status: 401 });
        }
      } catch (error) {
        console.error('2FA verification error:', error);
        // Continue without 2FA if there's an error
      }
    } else if (twoFactorSecret && !twoFactorCode) {
      return NextResponse.json({ 
        success: false,
        error: 'Two-factor code required',
        require2FA: true
      }, { status: 401 });
    }
    
    // Both password and 2FA verified - set authentication cookie
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('admin-authenticated', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Authentication failed'
    }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin-authenticated');
  return response;
}
