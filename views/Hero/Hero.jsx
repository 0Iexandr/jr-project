import { Container } from '@/components';
import Slider from 'components/Slider/Slider';
import Mouse from '../../public/mouse.svg';

export const Hero = ({ data }) => {
  return (
    <section>
      <Container>
        <Slider sliderImages={data.sliderImages} />
        <Mouse className="slide-bottom mx-auto mt-4" />
      </Container>
    </section>
  );
};
