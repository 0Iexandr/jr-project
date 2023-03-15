import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import { Container } from '@/components';

export const ContactUs = ({ data }) => {
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
