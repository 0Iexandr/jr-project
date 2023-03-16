import { Container } from '@/components';
import Image from 'next/image';

export const Advantages = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section id="about us" className="mb-[80px] md:mb-[100px] xl:mb-[120px]">
      <Container>
        <h2 className="sectionTitle mb-[32px] font-bold md:mb-[50px] xl:mb-[76px]">
          Why choose us
        </h2>
        <ul className="flex flex-wrap gap-x-[60px] gap-y-[50px]">
          {data.reason.map(({ id, title, description, image }) => (
            <li
              key={id}
              className="flex flex-col justify-start md:w-[calc((100%-60px)/2)] xl:w-[calc((100%-180px)/4)]"
            >
              <Image
                src={image.url}
                alt={title}
                width={54}
                height={54}
                className="border-[1px]md:h-[54px] mb-[30px] h-[44px] w-[44px] md:w-[54px]"
              />
              <p className="mb-[16px] text-[20px] font-[700] leading-[1.3] md:text-[24px]">
                {title}
              </p>
              <p className="text-middle text-gray">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
