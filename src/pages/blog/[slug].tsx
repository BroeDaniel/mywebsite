/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import CategoryLabel from '@/components/CategoryLabel';
import Layout from '@/components/Layouts/Layout';
import { marked } from 'marked';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { getPosts } from '@/lib/posts';
import { Post as PostType } from '@/pages/index';

interface PostPagePrpos {
  posts: PostType[];
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
// ER OPDATERET MED SEO
// }

export default function PostPage({
  frontmatter: { title, category, date, cover_image, alt_text, meta_desc },
  content,
  posts,
}: PostPagePrpos) {
  const filteredPosts = posts.filter(
    (post: any) =>
      post.frontmatter.category === category && post.frontmatter.title !== title
  );

  const newTitle = title.includes(';') ? title.split(';') : undefined;

  debugger;

  return (
    <Layout title={`${title} | Daniel Broe's blog `} description={meta_desc}>
      <div className='flex flex-col lg:flex-row'>
        <div className=' w-4/4 lg:w-3/4 px-6 py-6 bg-white rounded-lg shadow mt-6 lg:ml-2'>
          <div className='flex justify-between items-center mt-4 mb-6'>
            {newTitle ? (
              <div className='flex flex-col'>
                <h1 className='text-5xl mb-1'>{newTitle[0]}</h1>
                <h2 className='text-4xl'>{newTitle[1]}</h2>
              </div>
            ) : (
              <h1 className='text-5xl'>{title}</h1>
            )}
            <Link
              href='/blog'
              className='hidden md:block text-center border border-gray-500 text-gray-800 p-2 rounded-md select-none bg-hover focus:outline-none focus:shadow-outline min-w-fit'>
              Go Back
            </Link>
          </div>

          <Image
            src={cover_image}
            alt={alt_text}
            className='rounded'
            width={1200}
            height={800}
          />
          <div className='flex justify-between items-center my-3 border-b-2 border-gray-100 pb-3'>
            <div className='mr-4'>{date}</div>
            <CategoryLabel link={true}>{category}</CategoryLabel>
          </div>
          <div className='blog-text mt-2'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
        <div className='lg:w-1/4 px-4 py-6 bg-white rounded-lg shadow mt-6 flex-col lg:ml-5 mb-10 lg:mb-0'>
          <div className='sticky top-20'>
            <div className='flex justify-between items-center flex-col'>
              <h2 className='w-full text-4xl mb-2 pt-5'>Follow</h2>
              <p>
                If you like the post or the blog in general, follow me on other
                platforms for news, updates and general life hacks
              </p>
              <div className='flex w-full gap-1 mt-5 justify-center'>
                <Link
                  href='https://www.linkedin.com/in/danielbroe7/'
                  target='_blank'
                  className='pr-1'>
                  <FaLinkedin color='#0072b1' size={'30px'} />
                </Link>
                <Link
                  href='https://twitter.com/DanielBroe7'
                  target='_blank'
                  className='px-1'>
                  <FaTwitter color='#1DA1F2' size={'30px'} />
                </Link>
                <Link
                  href='mailto:BroeDaniel@gmail.com?Subject=Enquire from blogsite'
                  className='px-1'>
                  <FaEnvelope color='#4a154b' size={'30px'} />
                </Link>
              </div>
            </div>
            <div className='hidden lg:flex justify-between mt-10 flex-col'>
              <span>
                Below you find another and most recent post within the category:{' '}
                <CategoryLabel link={true}>{category}</CategoryLabel>
              </span>
              <hr className='my-5' />
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} key={index}>
                    <div className='flex flex-col my-2 drop-shadow-sm py-3 px-2'>
                      <h4 className='text-2xl font-medium pb-2'>
                        {post.frontmatter.title}
                      </h4>
                      <h6>{post.frontmatter.excerpt}</h6>
                    </div>
                  </Link>
                ))
              ) : (
                <h4 className='text-2xl font-medium py-3 my-2'>
                  No related blogposts yet!
                </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const categories: string[] = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

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
  const posts = getPosts();

  return {
    props: {
      frontmatter,
      content,
      slug,
      posts,
    },
  };
}
