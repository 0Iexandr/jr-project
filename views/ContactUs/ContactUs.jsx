import ModalBtn from 'components/ModalBtn/ModalBtn';
import Container from 'components/Container/Container';
import PropTypes from 'prop-types';

const ContactUs = ({ data }) => {
  const { description } = data;
  return (
    <section className="mb-[80px]">
      <Container>
        <div className="mx-auto text-center md:w-[375px] xl:w-[590px]">
          <div className="mb-[24px] flex flex-col items-center justify-center gap-[20px]">
            <h2 className="sectionTitle font-bold">Feel Free to Contact Us</h2>
            <p className="text-middle font-normal text-gray">
              {description[0].description}
            </p>
          </div>
          <ModalBtn text="start project" className="blackBtn" />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;

ContactUs.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
  }),
};
