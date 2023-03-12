import { Container } from '@/components';
import WorkSliderReact from 'components/WorkSlider/WorkSlderReact';
// import Counter from 'components/Counter/Counter';
// import WorkSlider from 'components/WorkSlider/WorkSlider';
import WorkStages from 'components/WorkStages/WorkStages';
import React from 'react';

function HowWeWork({ images }) {
  return (
    <section>
      <Container className="relative">
        <h2 className="sectionTitle font-bold">How we work</h2>
        <WorkStages />
        <WorkSliderReact images={images} />
      </Container>
    </section>
  );
}

export default HowWeWork;
// <Counter stages={images} current={current} />
