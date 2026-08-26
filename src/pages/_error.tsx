import type { NextPageContext } from "next";

function ErrorPage({ statusCode }: { statusCode?: number }) {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <section style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Error{statusCode ? ` ${statusCode}` : ''}</h1>
        <p style={{ marginTop: '0.5rem', color: '#475569' }}>An error occurred.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="/" style={{ display: 'inline-block', backgroundColor: '#92400e', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', textDecoration: 'none' }}>Go to Home</a>
        </div>
      </section>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode } as any;
};

export default ErrorPage;
