import Link from 'next/link';
export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-logo">
        A little more
        <br />
        <em>Beijing.</em>
      </Link>
      <div>
        <p>An independent city guide.</p>
        <Link href="/blog">Stories</Link>
        <Link href="/beijing-bars">Places</Link>
        <Link href="/about">About us</Link>
        <small>© {new Date().getFullYear()} BeijingSauce</small>
      </div>
    </footer>
  );
}
