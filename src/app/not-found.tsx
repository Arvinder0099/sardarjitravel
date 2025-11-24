export default function NotFound() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-700">Sorry, we couldn’t find the page you’re looking for.</p>
          <a href="/" className="mt-6 inline-block rounded-md bg-amber-600 px-5 py-3 text-white hover:bg-amber-700">Go back home</a>
        </div>
      </section>
    </main>
  );
}