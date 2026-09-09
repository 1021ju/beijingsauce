import type { Article, Bar } from './types';
// Synthetic fixtures only. These do not describe real venues or visits.
export const bars: Bar[] = [
  {
    id: 'demo-bar-1',
    slug: 'sample-listening-room',
    name: 'The listening room',
    district: 'Dongcheng',
    style: 'Listening bar',
    summary:
      'A sample venue profile, built around sound, atmosphere and the details worth knowing.',
    body: [
      {
        heading: 'The character',
        text: 'This is a fictional venue used to preview the directory. Your original description will live here, independently of the page design.',
      },
      {
        heading: 'Before you go',
        text: 'Verified address, opening hours and practical details will be supplied by the future content source.',
      },
    ],
    updatedAt: '2026-09-10',
    status: 'published',
    demo: true,
  },
  {
    id: 'demo-bar-2',
    slug: 'sample-cocktail-room',
    name: 'The cocktail room',
    district: 'Chaoyang',
    style: 'Cocktail bar',
    summary:
      'A second fictional profile to try the directory filters and compare different kinds of evenings.',
    body: [
      {
        heading: 'The character',
        text: 'This demonstration record lets the team test a different venue without inventing a real review.',
      },
    ],
    updatedAt: '2026-09-10',
    status: 'published',
    demo: true,
  },
];
export const articles: Article[] = [
  {
    id: 'demo-article-1',
    slug: 'sample-night-out',
    title: 'A night, on your own terms.',
    category: 'Field notes',
    excerpt:
      'An example of how a long-form story will look, and how it connects to a venue in the guide.',
    body: [
      {
        text: 'This is a layout sample, not a published review. The opening paragraph gives a story room to breathe before the details begin.',
      },
      {
        heading: 'A place for the details',
        text: 'Your writing will appear here. Paragraphs, headings and related places are handled by reusable templates, so changing the look of the site does not mean rewriting an article.',
      },
      {
        heading: 'From story to place',
        text: 'A story can link to one or several venue profiles. Practical information stays with the venue, while the experience and point of view stay with the story.',
      },
    ],
    author: 'BeijingSauce',
    publishedAt: '2026-09-10',
    barIds: ['demo-bar-1'],
    status: 'published',
    demo: true,
  },
  {
    id: 'demo-article-2',
    slug: 'sample-city-guide',
    title: 'Leave room for a detour.',
    category: 'Guides',
    excerpt:
      'A sample guide linking more than one place. Built for original reporting, not borrowed lists.',
    body: [
      {
        text: 'This sample demonstrates a guide that references multiple venues. Replace this fixture with original editorial content when the publishing connection is ready.',
      },
    ],
    author: 'BeijingSauce',
    publishedAt: '2026-09-10',
    barIds: ['demo-bar-1', 'demo-bar-2'],
    status: 'published',
    demo: true,
  },
];
