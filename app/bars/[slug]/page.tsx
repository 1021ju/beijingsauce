import Link from 'next/link';
import { notFound } from 'next/navigation';
import { content } from '@/lib/content/repository';
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const bar = await content.getBar((await params).slug);
  return bar
    ? {
        title: bar.name,
        description: bar.summary,
        alternates: { canonical: `/bars/${bar.slug}` },
        robots: bar.demo ? { index: false, follow: false } : undefined,
      }
    : { title: 'Place not found' };
}
export default async function BarPage({ params }: Props) {
  const bar = await content.getBar((await params).slug);
  if (!bar) notFound();
  const related = (await content.listArticles()).filter((x) =>
    x.barIds.includes(bar.id),
  );
  return (
    <main id="main" className="page">
      <Link className="back" href="/beijing-bars">
        ← Beijing bars
      </Link>
      <div className="page-intro">
        <p className="eyebrow">
          {bar.district} / {bar.style}
        </p>
        <h1>
          {bar.name}
          <span>.</span>
        </h1>
        <p>{bar.summary}</p>
      </div>
      <div className="venue-body">
        <div className="prose">
          {bar.demo && (
            <aside className="sample-note">
              Fictional venue. For layout and development only.
            </aside>
          )}
          {bar.body.map((block, i) => (
            <section key={i}>
              {block.heading && <h2>{block.heading}</h2>}
              <p>{block.text}</p>
            </section>
          ))}
        </div>
        <aside className="facts">
          <h2>Good to know</h2>
          <dl>
            <dt>Neighbourhood</dt>
            <dd>{bar.district}</dd>
            <dt>Style</dt>
            <dd>{bar.style}</dd>
            <dt>Address</dt>
            <dd>{bar.address || 'Not supplied'}</dd>
          </dl>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related">
          <h2>From the journal</h2>
          {related.map((a) => (
            <Link className="related-link" key={a.id} href={`/blog/${a.slug}`}>
              {a.title}
              <span>Read story ↗</span>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
