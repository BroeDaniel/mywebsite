import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

interface PostProps {
  post: {
    slug: string;
    frontmatter: {
      [key: string]: string;
    };
  };
  compact?: boolean;
}

// export interface FrontmatterType {
//   category: string;
//   cover_image: string;
//   date: string;
//   excerpt: string;
//   title: string;
// }

export default function Post({ post, compact = false }: PostProps) {
  const newTitle = post.frontmatter.title.includes(';')
    ? post.frontmatter.title.replace(';', ': ')
    : post.frontmatter.title;

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='w-full h-full px-10 py-6 bg-white shadow-lg mt-4 cursor-pointer hover:bg-gray-100'>
        {!compact && (
          <Image
            src={post.frontmatter.cover_image}
            alt=''
            height={420}
            width={600}
            priority
            className='mb-4 rounded'
          />
        )}
        <div className='flex justify-between items-center mt-1'>
          <span className='font-light text-gray-600'>
            {post.frontmatter.date}
          </span>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>

        <div className='mt-2'>
          <p className='text-2xl text-gray-700 font-bold m-0'>{newTitle}</p>

          <p className='mt-2 text-gray-600'>{post.frontmatter.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
