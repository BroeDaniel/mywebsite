import Layout from '@/components/Layouts/Layout';

export default function ServicePage() {
  return (
    <Layout title='Services available'>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Services</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>Coming soon</h3>
        <p className='mb-3'>This page will list the services available</p>
      </div>
    </Layout>
  );
}
