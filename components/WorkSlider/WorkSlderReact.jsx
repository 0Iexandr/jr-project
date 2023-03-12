import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Controller } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useState } from 'react';

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

export default function WorkSliderReact({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [textInstance, setTextInstance] = useState(null);

  //   const SwiperButtonNext = ({ children }) => {
  //     const swiper = useSwiper();
  //     return (
  //       <button
  //         onClick={() => swiper.slideNext()}
  //         {...(currentIndex === images.length - 1 && { disabled: true })}
  //         className="absolute top-[-50px] right-0 z-10 border bg-red-700"
  //       >
  //         {children}
  //       </button>
  //     );
  //   };

  //   const SwiperButtonPrev = ({ children }) => {
  //     const swiper = useSwiper();
  //     return (
  //       <button
  //         onClick={() => swiper.slidePrev()}
  //         {...(currentIndex === 0 && { disabled: true })}
  //         className="absolute top-[-50px] left-0 z-10 border bg-red-700"
  //       >
  //         {children}
  //       </button>
  //     );
  //   };

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
      <span>{currentIndex + 1}</span>
      <span>/</span>
      <span>{images.length}</span>
      <Swiper
        className="!overflow-visible"
        modules={[EffectFade, Pagination, Autoplay, Controller]}
        effect="fade"
        speed={300}
        fadeEffect={{ crossFade: true }}
        onSwiper={setSwiperInstance}
        preventInteractionOnTransition={true}
        onSlideChange={slide => {
          setCurrentIndex(slide.activeIndex);
        }}
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
      </Swiper>
      <Swiper
        className="!overflow-visible"
        modules={[EffectFade, Pagination, Autoplay, Controller]}
        effect="fade"
        onSwiper={setTextInstance}
        fadeEffect={{ crossFade: true }}
        // allowSlideNext={false}
        // allowSlidePrev={false}
        allowTouchMove={false}
      >
        {posts.map(post => {
          return (
            <SwiperSlide key={post.id}>
              <p>{post.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

// <SwiperButtonPrev>Prev Slide</SwiperButtonPrev>
// <SwiperButtonNext>Next Slide </SwiperButtonNext>
