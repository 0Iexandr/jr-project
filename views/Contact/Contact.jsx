import { Container } from '../../components';
import Form from './Form';

export const Contact = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section id="contact">
      <Container>
        <h2 className="mb-[24px] text-center text-[30px] font-[700] leading-[1.2] md:mb-[32px] md:text-left md:text-[54px] xl:mb-[76px]">
          Contacts
        </h2>
        <p className="mx-auto mb-[50px] max-w-[237px] text-center text-middle leading-[1.3] text-gray md:mx-0 md:max-w-none md:text-left md:text-[24px] md:font-[700] md:text-mainBlack xl:text-[28px]">
          Make request using form below or send e-mail to{' '}
          <a
            href={`mailto:${data.email}`}
            className="text-mainBlack hover:underline"
          >
            {data.email}
          </a>
        </p>
        <Form price={data.price} projectTypes={data.projectTypes} />
      </Container>
    </section>
  );
};
