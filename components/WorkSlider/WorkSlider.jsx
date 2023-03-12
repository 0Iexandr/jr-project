import Image from 'next/image';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';

// import { useState } from 'react';

const posts = [
  {
    id: 1,
    text: 'Controller Controller requires to pass one Swiper instance to another:',
  },
  {
    id: 2,
    text: 'The beginning of the modifier CSS class that can be added to swiper container depending on different parameters',
  },
  {
    id: 3,
    text: 'element, and will create required elements for navigation, pagination and scrollbar they are enabled (with their respective params object or with boolean ',
  },
  {
    id: 4,
    text: 'Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won',
  },
];

export default function WorkSlider({ images }) {
  // const swiperRef = useRef(null);
  // const textRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [textInstance, setTextInstance] = useState(null);

  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    setSwiperInstance(swiper);

    // return () => {
    //   swiper.destroy(true, true);
    // };
  }, []);

  useEffect(() => {
    const text = new Swiper('.myText', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    setTextInstance(text);
  }, []);

  const handlePrevButtonClick = () => {
    swiperInstance.slidePrev();
    textInstance.slidePrev();
  };

  const handleNextButtonClick = () => {
    swiperInstance.slideNext();
    textInstance.slideNext();
  };

  return (
    <div>
      <div
        className="swiper mySwiper !overflow-visible"
        controller-control=".text"
      >
        <div className="swiper-wrapper">
          {images.map(image => {
            return (
              <div className="swiper-slide overflow-visible" key={image.id}>
                <Image
                  alt={image.title}
                  src={image.image}
                  width={image.width}
                  height={image.height}
                  className=" h-[159px]"
                />
              </div>
            );
          })}
        </div>
        <button
          className="swiper-button-prev absolute top-[-50px] left-0 z-10 bg-red-700"
          onClick={handlePrevButtonClick}
        >
          Назад
        </button>
        <button
          className="swiper-button-next absolute top-[-50px] right-0 z-10 bg-red-700"
          onClick={handleNextButtonClick}
        >
          Вперед
        </button>
      </div>
      <div className="swiper myText">
        <div className="swiper-wrapper">
          {posts.map(post => {
            return (
              <div className="swiper-slide overflow-visible" key={post.id}>
                <p>{post.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
