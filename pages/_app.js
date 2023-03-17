import '@/styles/globals.css';
import { Layout } from 'layout';
import { useEffect, useState } from 'react';
import { Spinner } from '../components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Hydrated>
        <Layout data={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Hydrated>
    </>
  );
}

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return hydration ? children : <Spinner />;
};
