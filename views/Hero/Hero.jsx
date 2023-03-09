import { Container } from '@/components';
import Slider from 'components/Slider/Slider';
import Mouse from '../../public/mouse.svg';

export const Hero = ({ images }) => {
  return (
    <section>
      <Container>
        <Slider images={images} />
        <Mouse className="slide-bottom mx-auto mt-4" />
      </Container>
    </section>
  );
};
