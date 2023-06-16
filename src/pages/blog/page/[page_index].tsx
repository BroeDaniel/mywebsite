import fs from 'fs';
import path from 'path';
import Post from '@/components/Post';
import Layout from '@/components/Layouts/Layout';
import Pagination from '@/components/Pagtination';
import CategoryList from '@/components/CategoryList';
import { getPosts } from '@/lib/posts';
import { POSTS_PER_PAGE } from '@/utils/config';
import { Post as PostType } from '@/pages/index';

interface BlogPageProps {
  posts: PostType[];
  numPages: number;
  currentPage: number;
  categories: string[];
}

export default function BlogPage({
  posts,
  numPages,
  currentPage,
  categories,
}: BlogPageProps) {
  return (
    <Layout>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='w-full'>
          <h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1>
          <div className='flex mb-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-3/4 md:mr-10'>
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
            <div className='hidden md:block w-1/4'>
              <CategoryList categories={categories} />
            </div>
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

interface StaticProps {
  params: {
    page_index: string;
  };
}

export async function getStaticProps({ params }: StaticProps) {
  const page = parseInt(params && params.page_index) || 1;

  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  // Get categories for sidebar
  const categories: string[] = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
