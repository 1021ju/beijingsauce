import type { ComponentProps } from 'react';

// Use document navigation: hosted client-side Link transitions currently stall.
// Native links also preserve open-in-new-tab, history, and no-JavaScript access.
export default function PageLink({ children, ...props }: ComponentProps<'a'>) {
  // oxlint-disable-next-line next/no-html-link-for-pages
  return <a {...props}>{children}</a>;
}
