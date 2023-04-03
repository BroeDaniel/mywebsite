import Link from 'next/link';

interface childrenProps {
  children: string;
}

interface StringType {
  JavaScript: string;
  CSS: string;
  Python: string;
  PHP: string;
  Personal: string;
}

export default function CategoryLabel({ children }: childrenProps) {
  const colorKey: Record<string, string> = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Personal: 'red',
  };
  // console.log(children);

  console.log(colorKey[children]);

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}>
      {/* <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link> */}
      children
    </div>
  );
}
