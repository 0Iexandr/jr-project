import { Container } from '@/components';
import CVButton from 'components/CVButton/CVButton';

export const Career = ({ data }) => {
  const { description, email } = data;

  return (
    <section id="career" className="mb-[80px]">
      <Container>
        <div className="mx-auto text-center md:w-[450px] xl:w-[690px]">
          <div className="mt-[50px] flex flex-col items-center justify-center gap-[20px] ">
            <h2 className="sectionTitle font-bold tracking-wide">Career</h2>
            <p className=" tracking-teighter sectionSubtitle font-bold">
              {description[0]?.title}
            </p>
            <p className="text-middle font-normal text-gray md:w-[450px]">
              {description[0].description}
            </p>
          </div>
          <CVButton href={`mailto:${email}`} text="download cv" />
        </div>
      </Container>
    </section>
  );
};
