import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'HNUSEC',
  description: '湖南大学信息安全协会',
  icons: [
    { rel: 'icon', url: '/logo.jpg' },
    { rel: 'apple-touch-icon', url: '/logo.jpg' },
  ],
};
