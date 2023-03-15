import Head from 'next/head';
import { Advantages, Contact, Hero, Services } from '@/views';
import { Career } from 'views/Career/Career';
import { ContactUs } from 'views/ContactUs/ContactUs';
import HowWeWork from 'views/HowWeWork/HowWeWork';
import { DataRequest } from 'utils/request';
import Team from '../views/Team/Team';

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
      <Advantages data={data.whyChooseUsSection} />
      <HowWeWork data={data.howWeWorkSection.step} />
      <ContactUs data={data.feelFreeToContactUsSection} />
      <Team data={data.teamSection.teamMember} />
      <Contact data={data.contactSection} />
      <Career data={data.careerSection} />
    </>
  );
};

export default Home;
