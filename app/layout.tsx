import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'BeijingSauce · 北京，越夜越有味',icons:{icon:'/favicon.svg'},description:'从胡同里的一口热乎，到藏在街角的最后一杯。BeijingSauce 北京美食与夜生活指南，正在酝酿。'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
