import Link from 'next/link';
import type { Article, Bar } from '@/lib/content/types';
export function ArticleCard({
  article,
  index = 0,
}: {
  article: Article;
  index?: number;
}) {
  return (
    <article className="story-card">
      <Link
        href={`/blog/${article.slug}`}
        className={`story-art art-${index % 2}`}
        aria-label={article.title}
      >
        <span>
          {index % 2 ? 'One more' : 'After'}
          <em>{index % 2 ? 'detour.' : 'hours.'}</em>
        </span>
        <small>Layout sample</small>
      </Link>
      <div className="meta">
        {article.category}
        {article.demo ? ' / Sample' : ''}
      </div>
      <h2>
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h2>
      <p>{article.excerpt}</p>
    </article>
  );
}
export function BarCard({ bar }: { bar: Bar }) {
  return (
    <article className="bar-card">
      <div className="meta">
        {bar.district} / {bar.style}
      </div>
      <h2>
        <Link href={`/bars/${bar.slug}`}>{bar.name}</Link>
      </h2>
      <p>{bar.summary}</p>
      <Link className="text-link" href={`/bars/${bar.slug}`}>
        Explore the profile <span aria-hidden="true">↗</span>
      </Link>
      {bar.demo && <small>Fictional venue · Layout sample</small>}
    </article>
  );
}
