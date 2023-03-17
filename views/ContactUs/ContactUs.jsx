import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import { Container } from '@/components';
import Markdown from 'markdown-to-jsx';

export const ContactUs = ({ data }) => {
  const { description } = data;
  return (
    <section className="mb-[80px]">
      <Container>
        <div className="mx-auto text-center md:w-[375px] xl:w-[590px]">
          <div className="mb-[24px] flex flex-col items-center justify-center gap-[20px]">
            <h2 className="sectionTitle font-bold">Feel Free to Contact Us</h2>
            <div className="text-middle font-normal text-gray">
              <Markdown>{description[0].description}</Markdown>
            </div>
          </div>
          <ModalBtn text="start project" className="blackBtn" />
        </div>
      </Container>
    </section>
  );
};
