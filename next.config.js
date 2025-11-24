/** @type {import('next').NextConfig} */
// Use default `.next` build directory for reliability

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  // Use separate build directories per site role
  distDir: process.env.SITE_ROLE === 'admin' ? '.next-admin' : '.next-public',
  // Ensure Next writes a BUILD_ID for production starts
  generateBuildId: async () => {
    if (process.env.BUILD_ID && process.env.BUILD_ID.trim().length > 0) {
      return process.env.BUILD_ID.trim();
    }
    const ts = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
    return `build_${ts}`;
  },
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "ext.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "ugc.same-assets.com", pathname: "/**" },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    const scriptSrc = isDev ? "'self' 'unsafe-inline' 'unsafe-eval'" : "'self' 'unsafe-inline'";
    const connectSrc = isDev
      ? "'self' https: ws: wss: http://localhost:3050 http://0.0.0.0:3050 http://localhost:3051 http://0.0.0.0:3051 http://127.0.0.1:3051"
      : "'self' https:";

    const csp = `default-src 'self'; img-src 'self' data: blob: https://source.unsplash.com https://images.unsplash.com https://ext.same-assets.com https://ugc.same-assets.com; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src ${connectSrc}; frame-ancestors 'self'; base-uri 'self'; form-action 'self'`;

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
