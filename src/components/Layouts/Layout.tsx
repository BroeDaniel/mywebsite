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
        <link rel='icon' href='/favicon_white.ico' media="(prefers-color-scheme: light)"/>
      </Head>
      <Header />
      <main className='container mx-auto mt-7'>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: `Blog | Daniel Broe`,
  keywords:
    'personal development, coding, programming, technology, blog, learning, money',
  description:
    'The best info and learning within personal development and technology',
};
