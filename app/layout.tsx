import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'BeijingSauce · The city. Well tasted.',icons:{icon:'/favicon.svg'},description:'An independent guide to Beijing. Food and the hours after. Coming soon.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
