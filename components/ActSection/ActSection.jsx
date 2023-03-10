import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import { Container } from '@/components';
import CVButton from 'components/CVButton/CVButton';

function ActSection({ params }) {
  const { title, email, description, buttonText, subtitle } = params;
  return (
    <>
      {email ? (
        //!==============================================Career
        <section id="career">
          <Container>
            <div className="mx-auto text-center md:w-[450px] xl:w-[690px]">
              <div className="mt-[50px] flex flex-col items-center justify-center gap-[20px] ">
                <h2 className="sectionTitle font-bold tracking-wide">
                  {title}
                </h2>
                <p className=" tracking-teighter sectionSubtitle font-bold">
                  {subtitle}
                  {email}
                </p>
                <p className="text-middle font-normal text-gray md:w-[450px]">
                  {description}
                </p>
              </div>
              <CVButton href={`mailto:${email}`} text={buttonText} />
            </div>
          </Container>
        </section>
      ) : (
        //!==========================================Feel free to contact us
        <section>
          <Container>
            <div className="mx-auto text-center md:w-[375px] xl:w-[590px]">
              <div className="mt-[50px] mb-[24px] flex flex-col items-center justify-center gap-[20px]">
                <h2 className="sectionTitle font-bold">{title}</h2>
                <p className="text-middle font-normal text-gray">
                  {description}
                </p>
              </div>
              <ModalBtn text={buttonText} />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export default ActSection;
