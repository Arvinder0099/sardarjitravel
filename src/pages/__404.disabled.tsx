export default function NotFoundPage() {
  return (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 24 }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 999,
        background: '#eef2ff',
        color: '#1e293b',
        padding: '8px 12px',
        marginBottom: 16,
        fontSize: 12,
        fontWeight: 600,
      }}>
        <span>Page not found</span>
      </div>
      <h1 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a' }}>We couldn’t find that page</h1>
      <p style={{ marginTop: 8, color: '#475569' }}>
        The link may be broken or the page may have moved.
      </p>
      <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
        <a href="/" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 6, background: '#92400e', color: '#fff', padding: '8px 12px', fontSize: 14,
          textDecoration: 'none'
        }}>Home</a>
      </div>
    </div>
  );
}