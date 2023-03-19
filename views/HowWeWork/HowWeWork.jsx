import Container from 'components/Container/Container';
import WorkSlider from 'components/WorkSlider/WorkSlder';
import React from 'react';
import PropTypes from 'prop-types';

const HowWeWork = ({ data }) => {
  return (
    <section className="sections__padding" id="HowWeWork">
      <Container>
        <h2 className="sectionTitle mb-[32px] font-bold xl:mb-[76px]">
          How we work
        </h2>
        <WorkSlider data={data} />
      </Container>
    </section>
  );
};

export default HowWeWork;

HowWeWork.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};
