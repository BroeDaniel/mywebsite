import fs from 'fs';
import path from 'path';
import Post from '@/components/Post';
import matter from 'gray-matter';
import { getPosts } from '@/lib/posts';
import Layout from '@/components/Layouts/Layout';
import CategoryList from '@/components/CategoryList';
import { Post as PostType } from '@/pages/index';

interface CategoryProps {
  posts: PostType[];
  categoryName: string;
  categories: string[];
}

export default function CategoryBlogPage({
  posts,
  categoryName,
  categories,
}: CategoryProps) {
  return (
    <Layout>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='w-full'>
          <h1 className='text-5xl border-b-4 p-5 font-bold'>
            Posts in {categoryName}
          </h1>
          <div className='flex mb-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-3/4 md:mr-10'>
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
            <div className='hidden md:block w-1/4'>
              <CategoryList
                categories={categories}
                categoryName={categoryName}
              />
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

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface StaticPropsType {
  params: {
    category_name: string;
  };
}

export async function getStaticProps({
  params: { category_name },
}: StaticPropsType) {
  const posts = getPosts();

  // Get categories for sidebar
  const categories: string[] = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
