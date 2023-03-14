import { Container } from '@/components';
// import Image from 'next/image';

const advantages = [
  {
    title: 'Cost-Efficiency',
    description:
      'We deliver outstanding value by combining top-notch quality with affordable rates',
  },
  {
    title: 'Designing experience',
    description:
      'Our team has in-depth architectural skills and expertise from years working on housing complexes, apartments, and commercial buildings',
  },
  {
    title: 'Software Mastery',
    description:
      'We watch out for the latest trends and use innovative software to build photorealistic renders that convey the designer’s intent',
  },
  {
    title: 'Value',
    description:
      'Our outstanding architectural rendering images and animations have investors, designers, juries, and potential buyers turning their heads',
  },
];

export const Advantages = () => {
  return (
    <section>
      <Container>
        <ul className="flex flex-wrap gap-x-[60px] gap-y-[50px]">
          {advantages.map(({ title, description }) => (
            <li
              key={title}
              className="flex flex-col justify-start md:w-[calc((100%-60px)/2)] xl:w-[calc((100%-180px)/4)]"
            >
              {/* <Image src={img} alt={title} width={54} height={54} className="mb-[30px]" /> */}
              <div className="mb-[30px] h-[44px] w-[44px] border-[1px] border-gray md:h-[54px] md:w-[54px]"></div>
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
