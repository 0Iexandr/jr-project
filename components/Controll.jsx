import React, { useState } from 'react';
import { Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  'https://picsum.photos/id/0/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300',
  'https://picsum.photos/id/4/200/300',
  'https://picsum.photos/id/5/200/300',
];

const Discr = Swiper;

const Controll = () => {
  // store swiper instances
  // const [firstSwiper, setFirstSwiper] = useState(null);
  // const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div>
      <Swiper
        modules={[Navigation, Controller]}
        loop
        loopedSlides={4}
        // onSwiper={setFirstSwiper}
        controller={{ control: Discr }}
        // navigation
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} alt={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Discr
        modules={[Navigation, Controller]}
        loop
        loopedSlides={4}
        // navigation
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} alt={index} />
            </SwiperSlide>
          );
        })}
      </Discr>
    </div>
  );
};

export default Controll;
