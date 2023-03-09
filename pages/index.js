import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components';
import { Hero } from '@/views';
import Advantages from '../views/Advantages/Advantages';
import Contact from '../views/Contact/Contact';

const Home = ({ advantages, projectTypes }) => {
  return (
    <>
      <Head>
        <title>Next App Template</title>
        <meta name="description" content="Next app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Advantages advantages={advantages} />
      <Contact projectTypes={projectTypes} />
      <section>
        <Container>
          <div className="center">
            <Image
              className="logo"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className="thirteen">
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export function getStaticProps() {
  const advantages = [
    {
      title: 'Cost-Efficiency',
      description:
        'We deliver outstanding value by combining top-notch quality with affordable rates',
    },
    {
      title: 'Designing experience',
      description:
        'Our team has in-depth architectural skills and expertise from years working on housing complexes, apartments, and commercial buildings',
    },
    {
      title: 'Software Mastery',
      description:
        'We watch out for the latest trends and use innovative software to build photorealistic renders that convey the designer’s intent',
    },
    {
      title: 'Value',
      description:
        'Our outstanding architectural rendering images and animations have investors, designers, juries, and potential buyers turning their heads',
    },
  ];
  const projectTypes = ['Villa', 'Residential', 'Office', 'Other'];
  return {
    props: { advantages, projectTypes },
  };
}

export default Home;
