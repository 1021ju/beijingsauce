import { site, indexable } from '@/lib/site';
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      ...(indexable
        ? { allow: '/', disallow: ['/preview', '/api/'] }
        : { disallow: '/' }),
    },
    ...(indexable ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}
