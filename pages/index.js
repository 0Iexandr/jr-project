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
} from '@/views';
import { DataRequest } from 'utils/request';

export async function getStaticProps() {
  const data = await DataRequest();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hero: data.hero,
      servicesSection: data.servicesSection,
      whyChooseUsSection: data.whyChooseUsSection,
      howWeWorkSection: data.howWeWorkSection,
      feelFreeToContactUsSection: data.feelFreeToContactUsSection,
      teamSection: data.teamSection,
      contactSection: data.contactSection,
      careerSection: data.careerSection,
      footer: data.footer,
    },
  };
}

const Home = props => {
  const {
    hero,
    servicesSection,
    whyChooseUsSection,
    howWeWorkSection,
    feelFreeToContactUsSection,
    teamSection,
    contactSection,
    careerSection,
  } = props;

  return (
    <>
      <Head>
        <title>Next App Template</title>
      </Head>

      <Hero data={hero} />
      <Services data={servicesSection} />
      <Advantages data={whyChooseUsSection} />
      <HowWeWork data={howWeWorkSection.step} />
      <ContactUs data={feelFreeToContactUsSection} />
      <Team data={teamSection.teamMember} />
      <Contact data={contactSection} />
      <Career data={careerSection} />
    </>
  );
};

export default Home;
