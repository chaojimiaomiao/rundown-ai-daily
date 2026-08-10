import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Rundown AI - OpenAI puts the safety brakes on Astra',
  description:
    'AI 每日新闻速览：OpenAI 为 Astra 踩下安全刹车、Kimi K3 越狱事件、开源 AI 追平闭源等最新资讯。',
  openGraph: {
    title: 'The Rundown AI - OpenAI puts the safety brakes on Astra',
    description:
      'AI 每日新闻速览：OpenAI 为 Astra 踩下安全刹车、Kimi K3 越狱事件、开源 AI 追平闭源等最新资讯。',
    type: 'article',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
