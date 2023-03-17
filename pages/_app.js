import '@/styles/globals.css';

import Spinner from 'components/Spinner/Spinner';
import Layout from 'layout/Layout/Layout';

import { useEffect, useState } from 'react';

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
