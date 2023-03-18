import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Controller } from 'swiper';
import { useState } from 'react';
import Image from 'next/image';
import Counter from 'components/Counter/Counter';
import NextBtn from '../../public/nextBtn.svg';
import PrevBtn from '../../public/prevBtn.svg';
import { convertImage, toBase64 } from 'utils/blur';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const WorkSlider = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [textInstance, setTextInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevButtonClick = () => {
    swiperInstance.slidePrev();
  };

  const handleNextButtonClick = () => {
    swiperInstance.slideNext();
  };

  return (
    <div className="gap-[80px] xl:flex">
      <div className="mb-[5px]  xl:w-[255px]">
        <div className="mb-[32px] flex items-center justify-between md:mb-[24px] xl:mb-[32px]">
          <Counter steps={data.length} current={currentIndex + 1} />
          <div className="flex gap-[8px]">
            <button
              aria-label="previous-element"
              className="swiper-button-prev"
              onClick={handlePrevButtonClick}
            >
              <PrevBtn
                className={` ${
                  currentIndex > 0
                    ? 'stroke-mainBlack'
                    : 'stroke-additionalGray'
                }`}
              />
            </button>
            <button
              aria-label="next-element"
              className="swiper-button-next"
              onClick={handleNextButtonClick}
            >
              <NextBtn
                className={` ${
                  currentIndex === data.length - 1
                    ? 'stroke-additionalGray'
                    : 'stroke-mainBlack'
                }`}
              />
            </button>
          </div>
        </div>
        <Swiper
          modules={[EffectFade, Pagination, Autoplay, Controller]}
          effect="fade"
          speed={150}
          allowTouchMove={false}
          onSwiper={setTextInstance}
          fadeEffect={{ crossFade: true }}
        >
          {data.map(post => {
            return (
              <SwiperSlide key={post.id}>
                <h2 className="sectionSubtitle mb-[16px] font-bold xl:mb-[24px] xl:leading-[36px]  ">
                  {post.title}
                </h2>
                <p className=" text-middle text-gray">{post.description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        modules={[EffectFade, Pagination, Autoplay, Controller]}
        effect="fade"
        lazy="true"
        speed={150}
        fadeEffect={{ crossFade: true }}
        onSwiper={setSwiperInstance}
        preventInteractionOnTransition={true}
        onSlideChange={slide => {
          setCurrentIndex(slide.activeIndex);
          textInstance.slideTo(slide.activeIndex);
        }}
      >
        {data.map(step => {
          return (
            <SwiperSlide key={step.id} className="slide">
              <Image
                loading="lazy"
                className="min-h-[159px] object-cover md:h-[368px] xl:h-[540px] xl:w-[945px]"
                alt={step.title}
                src={step.image.url}
                width={step.image.width}
                height={step.image.height}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(step.image.width, step.image.height),
                )}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;

WorkSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.shape({
        height: PropTypes.number,
        url: PropTypes.string,
        width: PropTypes.number,
      }),
    }),
  ),
};
