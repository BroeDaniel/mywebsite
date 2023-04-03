import Layout from '@/components/Layouts/Layout';

export default function AboutPage() {
  return (
    <Layout title='About - DanielBroe'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl'>Who am I</h3>
        <p className='mb-5'>
          Here I will list a little bit about myself to get the reader to know a
          litte about me
        </p>
        <h3 className='text-2xl'>Why this site</h3>
        <p>
          The reasoning for developing this site is first and foremost to create
          valuable content, but also as a process for me to keep learning. This
          website forces me to dig deeper into the topics covered in the blog
          thus it works as my way of keep developing. Further, I offer my{' '}
          <span>services</span> which comes from my experience as a consultant
          and developer within a wide range of technolgies.
        </p>
        <p className='mt-2 mb-5'>
          Main topic of the blog is <span>Personal development</span> combined
          with my passion for technology, programming and entrepreneurship.
          These will be the set of categories within the blog, but all of which
          contains a subset of topics such as: Time management, learning new
          skills, Mindfulness, Stress & Financial management are all part of{' '}
          <span>Personal development</span>
        </p>
      </div>
    </Layout>
  );
}
