import { content } from '@/lib/content/repository';
import { ArticleCard } from '@/components/site/cards';
export const metadata = {
  title: 'Blog',
  description: 'Original stories, reviews and field notes from BeijingSauce.',
  alternates: { canonical: '/blog' },
};
export default async function Blog() {
  const articles = await content.listArticles();
  return (
    <main id="main" className="page">
      <div className="page-intro">
        <p className="eyebrow">The journal</p>
        <h1>
          More than
          <br />
          <em>a night out.</em>
        </h1>
        <p>Reviews, field notes and things worth sharing.</p>
      </div>
      <div className="stories">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {!articles.length && (
        <p className="empty">Our first stories are on their way.</p>
      )}
    </main>
  );
}
