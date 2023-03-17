import { Container } from '@/components';
import ClientsSlider from 'components/ClientsSlider/ClientsSlider';
import { useEffect, useState } from 'react';

export const Clients = ({ data }) => {
  const [sliderImages, setSliderImages] = useState(null);
  useEffect(() => {
    const updateArray = arr => {
      if (arr.length > 15) {
        return arr;
      } else {
        return updateArray([...arr, ...arr]);
      }
    };
    setSliderImages(updateArray(data.sliderImages));
  }, [data]);
  return (
    <section className="mb-[80px]">
      <Container>
        <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-[34px] md:leading-10 xl:mb-[4.75rem] xl:text-large">
          Clients
        </h2>
        {sliderImages && <ClientsSlider sliderImages={sliderImages} />}
      </Container>
    </section>
  );
};
