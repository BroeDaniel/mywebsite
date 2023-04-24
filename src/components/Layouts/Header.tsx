import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search';

const navItems = ['blog', 'services', 'about', 'contact'];

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <header
      style={{ background: 'linear-gradient(45deg, #4a154b, #703259)' }}
      className='text-gray-100 shadow w-full sticky top-0 left-0'>
      <div className='container mx-auto flex flex-wrap p-5 flex-row lg:items-center justify-between gap-4'>
        <Link
          href='/'
          className='flex title-font font-medium items-center md:justify-start mb-2 md:mb-0 hover:text-indigo-300'>
          <Image src='/logo.svg' width={40} height={40} alt='logo' />
          <span className='ml-3 text-xl'>DanielBroe</span>
        </Link>
        <Search />
        <div>
          <nav
            className={`hidden lg:flex flex-col md:flex-row items-center gap-2 md:gap-0 md:justify-end text-base mt-2 md:mt-0`}
            style={{ transition: 'max-height 0.3s ease-in-out' }}>
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
        <div className='flex lg:hidden'>
          <button
            onClick={toggleNavbar}
            className='focus:outline-none transition transform duration-300'>
            <svg
              className={`h-6 w-6 text-gray-300 cursor-pointer ${
                navbar ? 'rotate-180' : 'rotate-0'
              }`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              style={{ transition: 'transform 0.3s ease-in-out' }}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={
                  navbar ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          navbar ? 'flex' : 'hidden'
        } flex-col items-center gap-2  md:justify-end text-base pb-4`}
        style={{ transition: 'max-height 0.3s ease-in-out' }}>
        {navItems.map((item, index) => (
          <Link
            href={`/${item}`}
            key={index}
            className='mx-5 cursor-pointer capitalize hover:text-indigo-300'>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
