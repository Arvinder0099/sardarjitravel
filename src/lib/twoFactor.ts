import speakeasy from 'speakeasy';

// Generate a secret for 2FA (run this once to get the secret)
export function generateSecret(email: string) {
  const secret = speakeasy.generateSecret({
    name: `Sardarji Travel (${email})`,
    issuer: 'Sardarji Travel',
    length: 32,
  });
  
  return {
    secret: secret.base32,
    otpauthUrl: secret.otpauth_url,
  };
}

// Verify the 2FA token
export function verifyToken(secret: string, token: string): boolean {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    window: 2, // Allow 2 time steps before/after for clock drift
  });
}

// Generate current token (for testing)
export function generateToken(secret: string): string {
  return speakeasy.totp({
    secret: secret,
    encoding: 'base32',
  });
}
