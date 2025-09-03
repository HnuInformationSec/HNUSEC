import type { Metadata } from 'next';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export const metadata: Metadata = {
  title: '链接',
  description: '一些学长学姐的博客，也许你会在其中找到你想要的路',
};

export default function FriendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}