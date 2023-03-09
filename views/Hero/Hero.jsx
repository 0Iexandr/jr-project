import { Container } from '@/components';
import Slider from 'components/Slider/Slider';
import Image from 'next/image';

export const Hero = ({ images }) => {
  return (
    <section>
      <Container>
        <Slider images={images} />
        <Image
          src="/mouse.svg"
          alt="mouse"
          width={32}
          height={32}
          className="slide-bottom mx-auto mt-4"
        />
      </Container>
    </section>
  );
};
