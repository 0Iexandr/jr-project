import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Controller } from 'swiper';
import Image from 'next/image';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import { useEffect, useRef, useState } from 'react';

// import { useState } from 'react';

// const posts = [
//   {
//     id: 1,
//     text: 'Controller Controller requires to pass one Swiper instance to another:',
//   },
//   {
//     id: 2,
//     text: 'The beginning of the modifier CSS class that can be added to swiper container depending on different parameters',
//   },
//   {
//     id: 3,
//     text: 'element, and will create required elements for navigation, pagination and scrollbar they are enabled (with their respective params object or with boolean ',
//   },
//   {
//     id: 4,
//     text: 'Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won',
//   },
// ];

export default function WorkSlider({ images }) {
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button
        onClick={() => swiper.slideNext()}
        className="absolute top-[-10px] left-0 z-10 border bg-red-700"
      >
        {children}
      </button>
    );
  };

  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute bottom-[-10px] right-0 z-10 border bg-red-700"
      >
        {children}
      </button>
    );
  };

  // const swiperRef = useRef(null);
  // const [swiperInstance, setSwiperInstance] = useState(null);

  // useEffect(() => {
  //   const swiper = new Swiper(swiperRef.current, {
  //     effect: 'fade',
  //     fadeEffect: {
  //       crossFade: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });

  //   setSwiperInstance(swiper);

  //   // return () => {
  //   //   swiper.destroy(true, true);
  //   // };
  // }, []);

  // const handlePrevButtonClick = () => {
  //   swiperInstance.slidePrev();
  // };

  // const handleNextButtonClick = () => {
  //   swiperInstance.slideNext();
  // };

  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay, Controller]}
      effect="fade"
      loop="true"
    >
      {images.map(image => {
        return (
          <SwiperSlide key={image.id}>
            <Image
              alt={image.title}
              src={image.image}
              width={image.width}
              height={image.height}
              className="h-[159px]"
            />
          </SwiperSlide>
        );
      })}
      <SwiperButtonPrev>Prev Slide</SwiperButtonPrev>
      <SwiperButtonNext>Next Slide </SwiperButtonNext>
    </Swiper>
  );
}
// <div className="swiper" ref={swiperRef}>
//   <div className="swiper-wrapper">
//     {images.map(image => {
//       return (
//         <div className="swiper-slide" key={image.id}>
//           <Image
//             alt={image.title}
//             src={image.image}
//             width={image.width}
//             height={image.height}
//             className=" h-[159px]"
//           />
//         </div>
//       );
//     })}
//   </div>
//   <button
//     className="swiper-button-prev absolute top-[-10px] left-0 z-10 bg-red-700"
//     onClick={handlePrevButtonClick}
//   >
//     Назад
//   </button>
//   <button className="swiper-button-next" onClick={handleNextButtonClick}>
//     Вперед
//   </button>
// </div>
