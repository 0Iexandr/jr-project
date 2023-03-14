import Head from 'next/head';
import { Hero, Services } from '@/views';
import { gql, GraphQLClient } from 'graphql-request';
import { Career } from 'views/Career/Career';
import { ContactUs } from 'views/ContactUs/ContactUs';

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
      <ContactUs data={data.feelFreeToContactUsSection} />
      <Career data={data.careerSection} />
      <div id="contact">CONTACT</div>
    </>
  );
};

export default Home;

const query = gql`
  query MyQuery {
    careerSection {
      description {
        title
        description
      }
      email
    }
    clientsSection {
      sliderImages {
        alt
        image
        id
      }
    }
    contactSection {
      email
      price
      projectTypes {
        id
        projectType
      }
    }
    feelFreeToContactUsSection {
      description {
        description
        title
      }
    }
    footer {
      address
      email
      socialIcons {
        alt
        id
        image
      }
    }
    hero {
      sliderImages {
        alt
        id
        image
      }
    }
    howWeWorkSection {
      step {
        title
        image
        id
        description
      }
    }
    servicesSection {
      service {
        id
        image
        title
        description
      }
    }
    teamSection {
      teamMember {
        description
        id
        name
        photo
        role
      }
    }
    whyChooseUsSection {
      reason {
        description
        image
        id
        title
      }
    }
    worksSection {
      work {
        alt
        id
        image
        workType
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = process.env.NEXT_DATOCMS_API_URL;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Barear ' + process.env.NEXT_DATOCMS_API_TOKEN,
    },
  });
  const data = await graphQLClient.request(query);
  return {
    props: {
      data,
    },
  };
}
