"use client";

import { useState } from "react";

export default function Setup2FA() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQRCode = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/setup-2fa");
      const result = await response.json();
      
      if (response.ok) {
        setData(result);
      } else {
        setError(result.error || result.message);
      }
    } catch (err) {
      setError("Failed to generate 2FA setup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔐 Setup Two-Factor Authentication
          </h1>
          <p className="text-gray-600">
            Secure your admin panel with Google Authenticator
          </p>
        </div>

        {!data && !error && (
          <div className="text-center">
            <button
              onClick={generateQRCode}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate QR Code"}
            </button>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-semibold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {data && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📱 Scan this QR Code
              </h2>
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-lg">
                  <img 
                    src={data.qrCode} 
                    alt="2FA QR Code" 
                    className="w-64 h-64"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">
                Scan with Google Authenticator app
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">📋 Setup Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                {data.instructions.map((instruction: string, index: number) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🔑 Your Secret Key</h3>
              <div className="bg-white p-3 rounded border border-gray-300 font-mono text-sm break-all">
                {data.secret}
              </div>
              <p className="mt-2 text-xs text-gray-600">
                Save this secret key securely. You'll need to add it to your environment variables.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">✅ Next Steps</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Add TWO_FACTOR_SECRET to DigitalOcean environment variables</li>
                <li>Redeploy your application</li>
                <li>Test login with password + 6-digit code</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
