import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components';
import { Hero, Services } from '@/views';
import { gql, GraphQLClient } from 'graphql-request';
import ActSection from 'components/ActSection/ActSection';
import HowWeWork from 'views/HowWeWork/HowWeWork';
// import Controll from 'components/Controll';

// <Controll images={images} />
const Home = ({ sectionData, images }) => {
  return (
    <>
      <Head>
        <title>Next App Template</title>
        <meta name="description" content="Next app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero images={images} />
      <Services />
      <HowWeWork images={images} />
      <ActSection params={sectionData.contact} />
      <ActSection params={sectionData.career} />
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
      <div id="contact">CONTACT</div>
    </>
  );
};

export default Home;

//================это мои запросы на датосмс, потом когда будет готовый бек можно будет их подправить
const query = gql`
  query MyQuery {
    career {
      title
      subtitle
      id
      email
      description
      buttonType
      buttonText
    }
    contact {
      title
      buttonType
      description
      id
      buttonText
    }
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Barear ' + process.env.DATOCMS_API_KEY,
    },
  });
  const sectionData = await graphQLClient.request(query);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDANARY_CLOUD_NANE}/resources/image`,
    {
      headers: {
        authorization: `Basic ${Buffer.from(
          process.env.CLOUDANARY_API_KEY +
            ':' +
            process.env.CLOUDANARY_API_SECRET,
        ).toString('base64')}`,
      },
    },
  ).then(req => req.json());

  const { resources } = response;

  const images = resources.map(res => {
    return {
      id: res.asset_id,
      title: res.public_id,
      image: res.secure_url,
      width: res.width,
      height: res.height,
    };
  });
  return {
    props: {
      sectionData,
      images,
    },
  };
}
