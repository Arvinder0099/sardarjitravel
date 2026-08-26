export default function ErrorPage() {
  return (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 24 }}>
      <h1 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a' }}>Something went wrong</h1>
      <p style={{ marginTop: 8, color: '#475569' }}>Please try again later.</p>
      <div style={{ marginTop: 16 }}>
        <a href="/" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 6, background: '#92400e', color: '#fff', padding: '8px 12px', fontSize: 14,
          textDecoration: 'none'
        }}>Go Home</a>
      </div>
    </div>
  );
}
