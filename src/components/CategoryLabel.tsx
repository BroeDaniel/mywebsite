import Link from 'next/link';

interface childrenProps {
  children: string;
  link?: boolean;
}

export const colorKey: Record<string, string> = {
  Technology: 'blue',
  Money: 'green',
  Entrepreneuship: 'purple',
  Personal: 'red',
  Books: 'orange',
};

export default function CategoryLabel({
  children,
  link = false,
}: childrenProps) {
  return (
    <div
      className={`px-2 py-1 text-${colorKey[children]}-600 font-bold rounded inline-block`}>
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
