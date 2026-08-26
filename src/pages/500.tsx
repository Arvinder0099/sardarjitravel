export default function InternalServerErrorPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <section style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>500 - Internal Server Error</h1>
        <p style={{ marginTop: '0.5rem', color: '#475569' }}>Something went wrong. Please try again later.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="/" style={{ display: 'inline-block', backgroundColor: '#92400e', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', textDecoration: 'none' }}>Go to Home</a>
        </div>
      </section>
    </main>
  );
}
