import Head from 'next/head';
import { Hero } from '@/views';
import Advantages from '../views/Advantages/Advantages';
import Contact from '../views/Contact/Contact';

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
