import { Footer, Header } from 'layout';

export const Layout = ({ data, children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
