import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  numPages: number;
}

export default function Pagination({ currentPage, numPages }: PaginationProps) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className='mt-6 w-3/4'>
      <ul className='flex justify-end pl-0 list-none my-2 mr-10'>
        {!isFirst && (
          <Link href={prevPage}>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 bg-hover cursor-pointer'>
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} key={`page-${i}`}>
            <li
              className={`relative block py-2 px-3 leading-tight border border-gray-300 text-gray-800 mr-1 bg-hover cursor-pointer ${
                i + 1 === currentPage ? 'bg-gray-300' : 'bg-white'
              }`}>
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 bg-hover cursor-pointer'>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
