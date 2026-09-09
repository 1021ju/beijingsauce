# BeijingSauce project rules

- Keep the existing React/Vinext/Sites setup and package-lock.json.
- All public website copy is English. Engineering documentation may be Chinese.
- Read data through lib/content/repository.ts. Never put real editorial content in page JSX.
- Keep demo records explicitly labeled, noindex and out of the sitemap.
- Do not publish this scaffold over the live teaser without explicit authorization for the scaffold.
- Do not expose drafts or raw crawler output. New sources must implement the content contract.
- Shared styles/components belong in components/site and app/globals.css.
- Run npm run check and, with the local server running, npm run test:smoke before handoff.
- Never commit secrets, .env files, generated builds or node_modules.
