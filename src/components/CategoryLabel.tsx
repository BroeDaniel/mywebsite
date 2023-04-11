import Link from 'next/link';

interface childrenProps {
  children: string;
  link?: boolean;
}

export default function CategoryLabel({
  children,
  link = false,
}: childrenProps) {
  const colorKey: Record<string, string> = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Personal: 'red',
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}>
      {link ? (
        <Link href={`/blog/category/${children.toLowerCase()}`}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
}
