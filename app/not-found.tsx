import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="page empty">
      <p className="eyebrow">404</p>
      <h1>
        A wrong turn.
        <br />
        <em>A new possibility.</em>
      </h1>
      <p>This page is not here.</p>
      <Link className="text-link" href="/">
        Back to BeijingSauce ↗
      </Link>
    </main>
  );
}
