import { content } from '@/lib/content/repository';
import { site, indexable } from '@/lib/site';
export default async function sitemap() {
  if (!indexable) return [];
  const [articles, bars] = await Promise.all([
    content.listArticles(),
    content.listBars(),
  ]);
  return [
    '',
    '/blog',
    '/beijing-bars',
    '/about',
    ...articles.filter((x) => !x.demo).map((x) => `/blog/${x.slug}`),
    ...bars.filter((x) => !x.demo).map((x) => `/bars/${x.slug}`),
  ].map((path) => ({ url: site.url + path }));
}
