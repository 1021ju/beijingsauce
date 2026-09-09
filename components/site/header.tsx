import Link from 'next/link';
export function Header() {
  return (
    <>
      <div className="prototype">Preview edition — sample content</div>
      <header className="site-header">
        <Link href="/" className="wordmark" aria-label="BeijingSauce home">
          Beijing<span>Sauce.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/beijing-bars">Bars</Link>
          <Link href="/about">About Us</Link>
        </nav>
      </header>
    </>
  );
}
