import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'BeijingSauce · Beijing, after dark.',icons:{icon:'/favicon.svg'},description:'An independent guide to good food, great drinks and hidden corners in Beijing. Our first city guide is simmering.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
