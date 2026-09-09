import Link from '@/components/site/page-link';
import { notFound } from 'next/navigation';
import { content } from '@/lib/content/repository';
import { BarCard } from '@/components/site/cards';
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const article = await content.getArticle((await params).slug);
  return article
    ? {
        title: article.title,
        description: article.excerpt,
        alternates: { canonical: `/blog/${article.slug}` },
        robots: article.demo ? { index: false, follow: false } : undefined,
        openGraph: {
          type: 'article',
          title: article.title,
          description: article.excerpt,
          publishedTime: article.publishedAt,
          images: ['/sauce.jpg'],
        },
      }
    : { title: 'Story not found' };
}
export default async function ArticlePage({ params }: Props) {
  const article = await content.getArticle((await params).slug);
  if (!article) notFound();
  const bars = (await content.listBars()).filter((x) =>
    article.barIds.includes(x.id),
  );
  return (
    <main id="main" className="page article">
      <Link href="/blog" className="back">
        ← The journal
      </Link>
      <header className="article-header">
        <p className="eyebrow">
          {article.category}
          {article.demo ? ' / Layout sample' : ''}
        </p>
        <h1>{article.title}</h1>
        <p className="standfirst">{article.excerpt}</p>
        <div className="meta">
          By {article.author} ·{' '}
          <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        </div>
      </header>
      <div className="prose">
        {article.demo && (
          <aside className="sample-note">
            Demonstration content. This is not a real review.
          </aside>
        )}
        {article.body.map((block, i) => (
          <section key={i}>
            {block.heading && <h2>{block.heading}</h2>}
            <p>{block.text}</p>
          </section>
        ))}
      </div>
      {bars.length > 0 && (
        <section className="related">
          <div className="section-title">
            <h2>Places in this story.</h2>
          </div>
          <div className="bar-list">
            {bars.map((bar) => (
              <BarCard key={bar.id} bar={bar} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
