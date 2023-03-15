import Head from 'next/head';
import {
  Career,
  ContactUs,
  Hero,
  HowWeWork,
  Services,
  Team,
  Advantages,
  Contact,
  Clients,
  Works,
} from '@/views';
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
      <Works data={data.worksSection} />
      <Advantages data={data.whyChooseUsSection} />
      <HowWeWork data={data.howWeWorkSection.step} />
      <ContactUs data={data.feelFreeToContactUsSection} />
      <Clients data={data.clientsSection} />
      <Team data={data.teamSection.teamMember} />
      <Contact data={data.contactSection} />
      <Career data={data.careerSection} />
    </>
  );
};

export default Home;
