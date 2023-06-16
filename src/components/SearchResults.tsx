import { FrontmatterType } from '@/pages/blog/[slug]';
import Post from './Post';

interface ResultProps {
  slug: string;
  frontmatter: FrontmatterType;
}

interface Results {
  results: ResultProps[];
}

export default function SearchResults({ results }: Results) {
  if (results.length === 0) return <></>;

  return (
    <div
      style={{ width: '500px' }}
      className='absolute top-20 left-0 z-20 border-4 border-gray-500 bg-white text-black rounded-2xl'>
      <div style={{ maxHeight: '90vh' }} className='p-5 m-1 overflow-y-scroll'>
        <h2 className='text-3xl mb-3'>{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  );
}
