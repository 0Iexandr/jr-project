import { Container } from '@/components';
import Slider from 'components/Slider/Slider';

export const Hero = ({ images }) => {
  return (
    <section>
      <Container>
        <Slider images={images} />
      </Container>
    </section>
  );
};
