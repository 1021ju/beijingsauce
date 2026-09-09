import { content } from '@/lib/content/repository';
import { BarDirectory } from '@/components/site/bar-directory';
export const metadata = {
  title: 'Beijing Bars',
  description:
    'An independent directory of Beijing bars, with original venue profiles and related reviews.',
  alternates: { canonical: '/beijing-bars' },
};
export default async function Bars() {
  return (
    <main id="main" className="page">
      <div className="page-intro">
        <p className="eyebrow">The places</p>
        <h1>
          Beijing,
          <br />
          <em>after hours.</em>
        </h1>
        <p>A growing collection of bars with something to say.</p>
      </div>
      <BarDirectory bars={await content.listBars()} />
    </main>
  );
}
