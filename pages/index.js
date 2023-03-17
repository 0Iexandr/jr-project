import Head from 'next/head';
import { DataRequest } from 'utils/request';
import dynamic from 'next/dynamic';
import Hero from 'views/Hero/Hero';
import Services from 'views/Services/Services';

const DynamicCareer = dynamic(() =>
  import(/* webpackChunkName: "Career" */ '../views/Career/Career'),
);
const DynamicContactUs = dynamic(() =>
  import(/* webpackChunkName: "ContactUs" */ '../views/ContactUs/ContactUs'),
);
const DynamicHowWeWork = dynamic(() =>
  import(/* webpackChunkName: "HowWeWork" */ '../views/HowWeWork/HowWeWork'),
);
const DynamicAdvantages = dynamic(() =>
  import(/* webpackChunkName: "Advantages" */ '../views/Advantages/Advantages'),
);
const DynamicContact = dynamic(() =>
  import(/* webpackChunkName: "Contact" */ '../views/Contact/Contact'),
);
const DynamicClients = dynamic(() =>
  import(/* webpackChunkName: "Clients" */ '../views/Clients/Clients'),
);
const DynamicWorks = dynamic(() =>
  import(/* webpackChunkName: "Works" */ '../views/Works/Works'),
);
const DynamicTeam = dynamic(() =>
  import(/* webpackChunkName: "Team" */ '../views/Team/Team'),
);

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
      worksSection: data.worksSection,
      clientsSection: data.clientsSection,
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
    worksSection,
    clientsSection,
  } = props;

  return (
    <>
      <Head>
        <title>Next App Template</title>
      </Head>

      <Hero data={hero.sliderImages} />
      <Services data={servicesSection} />
      <DynamicAdvantages data={whyChooseUsSection} />
      <DynamicHowWeWork data={howWeWorkSection.step} />
      <DynamicContactUs data={feelFreeToContactUsSection} />
      <DynamicClients data={clientsSection} />
      <DynamicTeam data={teamSection.teamMember} />
      <DynamicWorks data={worksSection} />
      <DynamicContact data={contactSection} />
      <DynamicCareer data={careerSection} />
    </>
  );
};

export default Home;
