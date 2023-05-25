import Link from 'next/link';
import { colorKey } from '@/components/CategoryLabel';

interface CategoryListProps {
  categories: string[];
  categoryName?: string;
}

export default function CategoryList({
  categories,
  categoryName = '',
}: CategoryListProps) {
  return (
    <div className='w-full p-5 bg-white rounded-lg shadow-md mt-6'>
      <h3 className='text-2xl bg-gray-800 text-white p-3 rounded mb-2'>
        Blog Categories
      </h3>
      <ul className='divide-y divide-gray-300'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li
              className={`p-4 cursor-pointer bg-hover rounded ${
                categoryName.toLowerCase() === category.toLowerCase() &&
                `bg-${colorKey[category]}-600 bg-hover`
              }`}>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
