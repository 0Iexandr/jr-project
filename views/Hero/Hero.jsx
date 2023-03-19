import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import Slider from 'components/Slider/Slider';
import Mouse from '../../public/mouse.svg';

const Hero = ({ data }) => {
  return (
    <section className="relative">
      <Container>
        <h2 className="hidden">Hero Slider</h2>
        <Slider sliderImages={data} />
        <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 transform max-[1320px]:hidden">
          <Mouse className="slide-bottom" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};
