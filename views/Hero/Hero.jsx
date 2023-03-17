import { Container } from '@/components';
import Slider from 'components/Slider/Slider';
import Mouse from '../../public/mouse.svg';

export const Hero = ({ data }) => {
  return (
    <section className="relative mb-[80px]">
      <Container>
        <h2 className="hidden">Hero Slider</h2>
        <Slider sliderImages={data.sliderImages} />
        <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 transform max-[1320px]:hidden">
          <Mouse className="slide-bottom" />
        </div>
      </Container>
    </section>
  );
};
