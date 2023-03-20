import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import Container from 'components/Container/Container';
import Form from 'components/Form/Form';

const Contact = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (!data) {
    return null;
  }

  return (
    <section id="contact" className="sections__padding" ref={ref}>
      <Container>
        <h2 className="sectionTitle mb-[24px] text-center font-bold tracking-wide md:mb-[32px] md:text-left xl:mb-[76px]">
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
        {inView && <Form price={data.price} projectTypes={data.projectTypes} />}
      </Container>
    </section>
  );
};
export default Contact;

Contact.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    projectTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    ).isRequired,
  }),
};
