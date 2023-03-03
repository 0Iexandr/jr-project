import { Footer, Header } from 'layout';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
