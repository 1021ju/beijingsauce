import assert from 'node:assert/strict';
const base = process.env.TEST_URL || 'http://localhost:3000';
const checks = [
  ['/', 'Extra sauce'],
  ['/blog', 'More than'],
  ['/beijing-bars', 'Neighbourhood'],
  ['/about', 'Why Sauce'],
  ['/blog/sample-night-out', 'Demonstration content'],
  ['/bars/sample-listening-room', 'Fictional venue'],
  ['/preview', 'Development index'],
];
for (const [path, expected] of checks) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(html.includes(expected), `Missing content at ${path}`);
  assert.match(html, /noindex/, `Prototype must not be indexed: ${path}`);
  console.log(`PASS ${path}`);
}
for (const path of [
  '/blog/missing-record',
  '/bars/missing-record',
  '/missing-route',
]) {
  const response = await fetch(base + path);
  const html = await response.text();
  // Streaming app routes can send 200 before notFound() resolves.
  assert.ok(
    response.status === 404 ||
      (response.status === 200 && html.includes('This page is not')),
  );
  assert.ok(html.includes('This page is not'), path);
  assert.match(html, /noindex/);
  console.log(`PASS ${path} not-found`);
}
const health = await fetch(base + '/api/health');
assert.equal(health.status, 200);
assert.equal((await health.json()).status, 'ok');
const robots = await fetch(base + '/robots.txt');
assert.equal(robots.status, 200);
assert.match(await robots.text(), /Disallow: \//);
const sitemap = await fetch(base + '/sitemap.xml');
assert.equal(sitemap.status, 200);
assert.ok(!(await sitemap.text()).includes('sample-'));
console.log('PASS health, robots, sitemap');
