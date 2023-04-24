import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search';

const navItems = ['blog', 'services', 'about', 'contact'];

export default function Header() {
  const [navbar, setNavbar] = useState(true);

  return (
    <header
      style={{ background: 'linear-gradient(45deg, #4a154b, #703259)' }}
      className='text-gray-100 shadow w-full sticky top-0 left-0'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col lg:flex-row items-center justify-between gap-4'>
        <Link
          href='/'
          className='flex title-font font-medium items-center md:justify-start mb-2 md:mb-0 hover:text-indigo-300'>
          <Image src='/logo.svg' width={40} height={40} alt='logo' />
          <span className='ml-3 text-xl'>DanielBroe</span>
        </Link>
        <Search />
        {navbar && (
          <nav className='grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-0 sm:justify-end text-base mt-2 md:mt-0'>
            {navItems.map((item, index) => (
              <Link
                href={`/${item}`}
                key={index}
                className='mx-5 cursor-pointer capitalize hover:text-indigo-300'>
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
