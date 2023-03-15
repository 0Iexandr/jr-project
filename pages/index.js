import Head from 'next/head';
import { Career, ContactUs, Hero, HowWeWork, Services, Team } from '@/views';
import { DataRequest } from 'utils/request';

export async function getStaticProps() {
  const data = await DataRequest();
  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Next App Template</title>
        <meta name="description" content="Next app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero data={data.hero} />
      <Services data={data.servicesSection} />
      <HowWeWork data={data.howWeWorkSection.step} />
      <ContactUs data={data.feelFreeToContactUsSection} />
      <Team data={data.teamSection.teamMember} />
      <Career data={data.careerSection} />
      <div id="contact">CONTACT</div>
    </>
  );
};

export default Home;
