/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import CategoryLabel from '@/components/CategoryLabel';
import Layout from '@/components/Layouts/Layout';
import { marked } from 'marked';
import Image from 'next/image';

interface PostPagePrpos {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
  content: any;
}

// export interface FrontmatterType {
//   category: string;
//   cover_image: string;
//   date: string;
//   excerpt: string;
//   title: string;
// }

export default function PostPage({
  frontmatter: { title, category, date, cover_image },
  content,
}: PostPagePrpos) {
  return (
    <Layout title={title}>
      <div className='flex'>
        <div className='w-3/4 px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
          <Link href='/blog'>Go Back</Link>
          <div className='flex justify-between items-center mt-4 mb-7'>
            <h1 className='text-5xl'>{title}</h1>
            <CategoryLabel link={true}>{category}</CategoryLabel>
          </div>
          {/* <img src={cover_image} alt=''  className='w-full rounded' /> */}
          <Image
            src={cover_image}
            alt='main image post of man holding a lightbulp'
            width={1200}
            height={800}
          />

          <div className='flex justify-between items-center bg-gray-100 p-2 my-8'>
            <div className='mr-4'>{date}</div>
          </div>

          <div className='blog-text mt-2'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
        <div className='w-1/4 px-10 py-12 bg-white rounded-lg shadow-md mt-6 flex-col ml-5'>
          <div className='sticky top-5'>
            <div className='flex justify-between items-center mt-4 flex-col'>
              <h2 className='w-full text-4xl mb-2'>Follow</h2>
              <p>
                Some text here about social medias to follow me on for regular
                updates, not only blog updates but also tricks, news, hacks etc
              </p>
              <div className='flex w-full gap-1'>
                <div>icon 1</div>
                <div>icon 2</div>
                <div>icon 3</div>
                <div>icon 4</div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-10 flex-col'>
              <h2 className='w-full text-4xl mb-2'>More in {category}</h2>
              <p>
                Some text here about social medias to follow me on for regular
                updates, not only blog updates but also tricks, news, hacks etc
              </p>
              <p>
                Some text here about social medias to follow me on for regular
                updates, not only blog updates but also tricks, news, hacks etc
              </p>
              <p>
                Some text here about social medias to follow me on for regular
                updates, not only blog updates but also tricks, news, hacks etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
