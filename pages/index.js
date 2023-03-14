import Head from 'next/head';
import { Advantages, Contact, Hero } from '@/views';
// import { Career } from 'views/Career/Career';
// import { ContactUs } from 'views/ContactUs/ContactUs';
import { DataRequest } from 'utils/request';

export async function getStaticProps() {
  const data = await DataRequest();
  return {
    props: {
      data,
    },
  };
}

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
      {/* <Modal /> */}
    </>
  );
};

export default Home;
