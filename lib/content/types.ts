export type PublicationStatus = 'draft' | 'published';
export type Paragraph = { heading?: string; text: string };
export interface Bar {
  id: string;
  slug: string;
  name: string;
  district: string;
  style: string;
  summary: string;
  body: Paragraph[];
  address?: string;
  updatedAt: string;
  status: PublicationStatus;
  demo?: boolean;
}
export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: Paragraph[];
  author: string;
  publishedAt: string;
  barIds: string[];
  status: PublicationStatus;
  demo?: boolean;
}
export interface ContentRepository {
  listBars(): Promise<Bar[]>;
  getBar(slug: string): Promise<Bar | undefined>;
  listArticles(): Promise<Article[]>;
  getArticle(slug: string): Promise<Article | undefined>;
}
