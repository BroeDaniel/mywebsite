import Head from 'next/head';
import Header from './Header';
import { ReactNode } from 'react';

interface LayoutProps {
  title: string;
  keywords: string;
  description: string;
  children: ReactNode;
}

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link
          rel='icon'
          href='/favicon_white.ico'
          media='(prefers-color-scheme: light)'
        />
      </Head>
      <Header />
      <main className='container mx-auto'>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: `Daniel Broe | Blog -  Personal Development and Technology Insights`,
  keywords:
    'Personal development, Coding, Programming, Technology, Blog, Learning, Money, Financial independence, Tech news, Innovation, Productivity, Online learning, Software development, Self-improvement, Entrepreneurship, Artificial intelligence, Digital skill',
  description:
    'Explore a wealth of practical knowledge on personal development and technology. Gain valuable insights, actionable tips, and expert guidance to enhance your growth and stay informed.',
};
