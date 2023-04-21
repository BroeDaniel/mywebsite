import Link from 'next/link';
import Post from '@/components/Post';
import Layout from '@/components/Layouts/Layout';
import { getPosts } from '@/lib/posts';

interface PostsProps {
  posts: Post[];
}

export interface Post {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function HomePage({ posts }: PostsProps) {
  return (
    <Layout>
      <div className='flex justify-between'>
        <h1 className='text-5xl p-5 font-bold'>Recent posts</h1>
        <Link
          href='/blog'
          className='text-center border border-gray-500 text-gray-800 p-4 rounded-md py-4 m-5 select-none hover:bg-gray-100 focus:outline-none focus:shadow-outline'>
          All posts
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
