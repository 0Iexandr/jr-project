import { Container } from '@/components';
import Slider from 'components/Slider/Slider';
import Mouse from '../../public/mouse.svg';

export const Hero = ({ data }) => {
  return (
    <section className="relative mb-[80px]">
      <Container>
        <Slider sliderImages={data.sliderImages} />
        <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 transform">
          <Mouse className="slide-bottom" />
        </div>
      </Container>
    </section>
  );
};
