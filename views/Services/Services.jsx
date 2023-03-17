import Image from 'next/image';
import Container from 'components/Container/Container';
import ModalBtn from 'components/ModalBtn/ModalBtn';

const Services = ({ data }) => {
  return (
    <section id="services" className="mb-[80px] md:mb-[100px] xl:mb-[120px]">
      <Container>
        <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-[34px] md:leading-10 xl:mb-[4.75rem] xl:text-large">
          Services
        </h2>
        <ul>
          {data.service.map(el => {
            return (
              <li
                key={el.id}
                className="mb-[60px] last:mb-0 md:mb-20 xl:mb-[100px] xl:flex xl:gap-[60px] xl:even:flex-row-reverse"
              >
                <div className="mb-8 h-[calc(100vw-40px)] sm:h-[440px] sm:w-[440px] sm:pb-0 md:h-[329px] md:w-[648px] xl:mb-0 xl:h-[480px] xl:w-[945px]">
                  <Image
                    className="h-full w-full object-cover"
                    src={el.image.url}
                    alt={el.title}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="xl:w-[275px]">
                  <h3 className="mb-4 text-xl font-bold leading-[26px] md:text-[24px] md:leading-[30px] xl:mb-6 xl:text-big ">
                    {el.title}
                  </h3>
                  <p className="mb-6 text-lg leading-[26px] text-gray xl:mb-8">
                    {el.description}
                  </p>
                  <ModalBtn text="start project" className="blackBtn" />
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Services;
