import { Container } from '@/components';
import WorkSlider from 'components/WorkSlider/WorkSlder';
import React from 'react';

function HowWeWork({ data }) {
  return (
    <section className="mb-[80px]" id="HowWeWork">
      <Container>
        <h2 className="sectionTitle mb-[32px] font-bold xl:mb-[76px]">
          How we work
        </h2>
        <WorkSlider data={data} />
      </Container>
    </section>
  );
}

export default HowWeWork;
