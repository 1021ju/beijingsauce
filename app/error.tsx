'use client';
export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main id="main" className="page empty">
      <h1>A brief interruption.</h1>
      <p>We could not load this page. Please try again.</p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
