import Head from 'next/head';
import { Advantages, Contact, Hero } from '@/views';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next App Template</title>
        <meta name="description" content="Next app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Advantages />
      <Contact />
    </>
  );
};

export default Home;
