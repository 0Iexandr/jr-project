import { Container } from '../../components';
import Form from './Form';

export const Contact = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section id="contact">
      <Container>
        <h2 className="sectionTitle mb-[24px] font-bold tracking-wide md:mb-[32px] md:text-left xl:mb-[76px]">
          Contacts
        </h2>
        <p className="contact__text">
          Make request using form below or send e-mail to{' '}
          <a
            href={`mailto:${data.email}`}
            className="text-mainBlack hover:underline focus:underline"
          >
            {data.email}
          </a>
        </p>
        <Form price={data.price} projectTypes={data.projectTypes} />
      </Container>
    </section>
  );
};
