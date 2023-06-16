import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout title='About - Daniel Broe'>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>About</h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl'>Who am I</h3>
        <p className='mb-5'>
          Hi! My name is Daniel Broe and I am a fullstack developer living in
          Denmark with my girlfriend and two kids. My interests are well known
          since they are mostly outlined as the topics included in the blog, but
          besides those, I also love sports and in particular Football. My kids
          are in kindergarden and just started school, so they are still at an
          age where it (luckily) requires a lot of my attention. I would
          describe myself as a family man, who loves and priorities the family
          much, and besides my self-learning the driver for this blog is for me
          to be the best possible version of myself. For myself but surely also
          for them and for the possibility to pass on my learnings. I believe
          you never get too old to learn, and life really is about keep
          learning, so you evolve so I kinda want to practice what i preach.
        </p>
        <h3 className='text-2xl'>Why this site</h3>
        <p>
          The reasoning for developing this site is first and foremost to create
          valuable content, but also as a process for me to keep learning. This
          website forces me to dig deeper into the topics covered in the blog
          thus it works as my way of keep developing. Further, I offer my{' '}
          <Link href='/services'>services</Link> which comes from my experience
          as a consultant and developer within a wide range of technolgies.
        </p>
        <p className='mt-2 mb-5'>
          Main topic of the blog is <em>Personal development</em> combined with
          my passion for technology, money and entrepreneurship. These will be
          the set of categories within the blog, but all of which contains a
          subset of topics such as: Time management, learning new skills,
          mindfulness, programming, stress & financial management.
        </p>
        <p className='font-bold'>
          Through my blog and services is how i can help your personal growth.
        </p>
      </div>
    </Layout>
  );
}
