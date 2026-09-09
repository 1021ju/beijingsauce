import Link from '@/components/site/page-link';
export const metadata = {
  title: 'Development index',
  robots: { index: false, follow: false },
};
export default function Preview() {
  return (
    <main id="main" className="page">
      <h1>Development index.</h1>
      <p>Preview the page templates with fictional content.</p>
      <div className="prose">
        {[
          ['/', 'Home'],
          ['/blog', 'Blog'],
          ['/beijing-bars', 'Bars directory'],
          ['/about', 'About us'],
          ['/blog/sample-night-out', 'Article template'],
          ['/bars/sample-listening-room', 'Venue template'],
        ].map(([href, label]) => (
          <p key={href}>
            <Link className="text-link" href={href}>
              {label}
            </Link>
          </p>
        ))}
      </div>
    </main>
  );
}
