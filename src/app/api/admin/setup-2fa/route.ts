import { NextResponse } from 'next/server';
import { generateSecret } from '@/lib/twoFactor';
import QRCode from 'qrcode';

export async function GET() {
  try {
    // Check if 2FA is already set up
    const twoFactorSecret = process.env.TWO_FACTOR_SECRET;
    
    if (twoFactorSecret) {
      return NextResponse.json({ 
        error: '2FA already configured',
        message: 'Two-factor authentication is already set up. Contact administrator to reset.'
      }, { status: 400 });
    }
    
    // Generate new secret
    const email = 'jabarjangs4@gmail.com';
    const { secret, otpauthUrl } = generateSecret(email);
    
    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl || '');
    
    return NextResponse.json({
      secret,
      qrCode: qrCodeDataUrl,
      message: 'Scan this QR code with Google Authenticator app',
      instructions: [
        '1. Download Google Authenticator app on your phone',
        '2. Tap "+" to add a new account',
        '3. Select "Scan QR code"',
        '4. Scan the QR code shown below',
        `5. Add this secret to your environment variables: TWO_FACTOR_SECRET=${secret}`,
        '6. Restart the application',
      ],
    });
  } catch (error) {
    console.error('2FA setup error:', error);
    return NextResponse.json({ error: 'Failed to generate 2FA setup' }, { status: 500 });
  }
}
