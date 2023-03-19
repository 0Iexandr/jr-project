import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import CVButton from 'components/CVButton/CVButton';
import Container from 'components/Container/Container';

const Career = ({ data }) => {
  const { description, email } = data;

  return (
    <section id="career" className="mb-[80px]">
      <Container>
        <div className="mx-auto text-center xl:w-[700px]">
          <div className="mt-[50px] flex flex-col items-center justify-center gap-[20px]">
            <h2 className="sectionTitle font-bold tracking-wide">Career</h2>
            <p className=" tracking-teighter sectionSubtitle font-bold sm:w-[280px] md:w-[400px] xl:w-max">
              {description[0]?.title}
            </p>
            <div className="prose w-[280px] text-middle font-normal text-gray md:w-[440px] xl:w-[500px]">
              <Markdown>{description[0].description}</Markdown>
            </div>
          </div>
          <CVButton href={`mailto:${email}`} text="download cv" />
        </div>
      </Container>
    </section>
  );
};
export default Career;
Career.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    email: PropTypes.string,
  }),
};
