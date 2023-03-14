import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Controller } from 'swiper';
import { useState } from 'react';
import Image from 'next/image';
import Counter from 'components/Counter/Counter';
import NextBtn from '../../public/nextBtn.svg';
import PrevBtn from '../../public/prevBtn.svg';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const posts = [
  {
    id: 1,
    slideTitle: 'Project Preperation',
    text: 'To start the project, we need to get maximum information about the project (references for landscaping, materials, wishes for mood, etc.). You could fill out a brief on our website, upload your project materials into it. Or send all materials to info@jazzrender.com. Then we consider the initial data, clarify details, agree on the camera angle, light, mood, etc.',
  },
  {
    id: 2,
    slideTitle: 'Preview Render',
    text: 'At this stage, you will be able to evaluate what the overall composition looks like, the sky, chiaroscuro, materials, and color in the image. We will show the main plants, grass, shrubs that will affect the composition of the frame and show the figures of people.',
  },
  {
    id: 3,
    slideTitle: 'Prefinal Render',
    text: 'At this stage, we make all your corrections and primarily work on the story within the image, which would enrich the overall mood of the illustration as well as support and clarify the purpose of the project.',
  },
  {
    id: 4,
    slideTitle: 'Final Render & Delivery',
    text: 'We finalize the image, also taking into account all the client’s requirements. This also applies to general post-production.',
  },
];

export default function WorkSlider({ images }) {
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
      <div className="mb-[32px] md:mb-[5px] xl:w-[255px]">
        <div className="mb-[32px] flex items-center justify-between md:mb-[24px] xl:mb-[32px]">
          <Counter images={images.length} current={currentIndex + 1} />
          <div className="flex gap-[8px]">
            <button
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
              className="swiper-button-next"
              onClick={handleNextButtonClick}
            >
              <NextBtn
                className={` ${
                  currentIndex === images.length - 1
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
          onSwiper={setTextInstance}
          fadeEffect={{ crossFade: true }}
        >
          {posts.map(post => {
            return (
              <SwiperSlide key={post.id}>
                <h2 className="sectionSubtitle mb-[16px] font-bold xl:mb-[24px] xl:leading-[36px]  ">
                  {post.slideTitle}
                </h2>
                <p className=" text-middle text-gray">{post.text}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        modules={[EffectFade, Pagination, Autoplay, Controller]}
        effect="fade"
        speed={150}
        fadeEffect={{ crossFade: true }}
        onSwiper={setSwiperInstance}
        preventInteractionOnTransition={true}
        onSlideChange={slide => {
          setCurrentIndex(slide.activeIndex);
          textInstance.slideTo(slide.activeIndex);
        }}
      >
        {images.map(image => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                className="h-[159px] w-[945px] object-cover md:h-[368px] xl:h-[540px]"
                alt={image.title}
                src={image.image}
                width={image.width}
                height={image.height}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
