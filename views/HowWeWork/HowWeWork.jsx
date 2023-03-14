import { Container } from '@/components';
import WorkSlider from 'components/WorkSlider/WorkSlder';
// import Counter from 'components/Counter/Counter';
// import WorkSlider from 'components/WorkSlider/WorkSlider';
// import WorkStages from 'components/WorkStages/WorkStages';
import React from 'react';

function HowWeWork({ images }) {
  return (
    <section>
      <Container className="relative">
        <h2 className="sectionTitle mb-[32px] font-bold xl:mb-[76px]">
          How we work
        </h2>
        <WorkSlider images={images} />
      </Container>
    </section>
  );
}

export default HowWeWork;
// <Counter stages={images} current={current} />
