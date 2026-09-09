export const site = {
  name: 'BeijingSauce',
  url: 'https://beijingsauce.com',
  description:
    'An independent guide to Beijing. Places, stories, and a little extra sauce.',
};
// Keep this prototype out of search until real content and production are ready.
export const indexable = process.env.SITE_ENV === 'production';
