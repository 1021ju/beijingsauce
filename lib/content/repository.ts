import { articles, bars } from './fixtures';
import type { ContentRepository } from './types';
// Only this adapter changes when a database or publishing snapshot is connected.
// Never expose draft records through public list/detail methods.
export const content: ContentRepository = {
  async listBars() {
    return bars.filter((x) => x.status === 'published');
  },
  async getBar(slug) {
    return bars.find((x) => x.slug === slug && x.status === 'published');
  },
  async listArticles() {
    return articles
      .filter((x) => x.status === 'published')
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  },
  async getArticle(slug) {
    return articles.find((x) => x.slug === slug && x.status === 'published');
  },
};
