import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search';

const navItems = ['blog', 'services', 'about', 'contact'];

export default function Header() {
  return (
    <header
      style={{ background: 'linear-gradient(45deg, #4a154b, #703259)' }}
      className='text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <Link
          href='/'
          className='flex title-font font-medium items-center md:justify-start mb-4 md:mb-0 hover:text-indigo-300'>
          <Image src='/logo.svg' width={40} height={40} alt='logo' />
          <span className='ml-3 text-xl'>DanielBroe</span>
        </Link>
        <Search />
        <nav className='flex flex-wrap items-center justify-end text-base'>
          {navItems.map((item, index) => (
            <Link
              href={`/${item}`}
              key={index}
              className='mx-5 cursor-pointer capitalize hover:text-indigo-300'>
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
