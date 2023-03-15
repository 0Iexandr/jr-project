import '@/styles/globals.css';
import { Layout } from 'layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout data={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
