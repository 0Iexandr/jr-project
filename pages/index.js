import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components';
import { Hero } from '@/views';

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
    </>
  );
};

export default Home;
