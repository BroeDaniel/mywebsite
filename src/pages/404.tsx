import Layout from '@/components/Layouts/Layout';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <Layout title='Whoops! I got lost'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/logo.svg'
          alt='Logo'
          width={70}
          height={70}
          className='bg-gray-800 rounded-2xl'
        />

        <h1 className='text-6xl my-5'>Hey there!</h1>

        <h2 className='text-4xl text-gray-400 mb-5'>
          You ran to far away, please go back as this is out of my territory
        </h2>
      </div>
    </Layout>
  );
}
