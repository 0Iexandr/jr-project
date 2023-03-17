import '@/styles/globals.css';
import Layout from 'layout/Layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout data={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
