import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/lib/content/repository';
import { ArticleCard, BarCard } from '@/components/site/cards';
export const metadata = { alternates: { canonical: '/' } };
export default async function Home() {
  const [articles, bars] = await Promise.all([
    content.listArticles(),
    content.listBars(),
  ]);
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Beijing, by the curious.</p>
          <h1>
            Extra sauce,
            <br />
            <em>please.</em>
          </h1>
          <p className="hero-note">
            Places with character.
            <br />
            Stories with a point of view.
          </p>
          <Link className="text-link" href="/beijing-bars">
            Find your next evening ↗
          </Link>
        </div>
        <figure className="hero-image">
          <Image
            unoptimized
            src="/sauce.jpg"
            alt="Dumplings, sauce and a beer on a warmly lit table"
            width="1122"
            height="1402"
            priority
          />
          <figcaption>Food. Company. The hours after.</figcaption>
        </figure>
      </section>
      <section className="section">
        <div className="section-title">
          <h2>
            The journal<span>.</span>
          </h2>
          <Link href="/blog">All stories ↗</Link>
        </div>
        <div className="stories">
          {articles.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
      <section className="section places">
        <div className="section-title">
          <h2>
            Stay for another<span>.</span>
          </h2>
          <Link href="/beijing-bars">Beijing bars ↗</Link>
        </div>
        <div className="bar-list">
          {bars.slice(0, 2).map((bar) => (
            <BarCard key={bar.id} bar={bar} />
          ))}
        </div>
      </section>
    </main>
  );
}
