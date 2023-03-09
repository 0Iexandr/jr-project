import { Container } from '@/components';
// import Image from 'next/image';

const Advantages = ({ advantages }) => {
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
              <p className="mb-[16px] text-[24px] font-[700] leading-[1.3]">
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

export default Advantages;
