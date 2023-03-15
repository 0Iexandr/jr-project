import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectFade, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';

export default function ClientsSlider({ sliderImages }) {
  console.log(sliderImages);
  return (
    <div className="clients-swiper">
      <Swiper
        slidesPerGroupAuto={true}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 37,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          1320: {
            slidesPerView: 'auto',
            spaceBetween: 87,
            slidesPerGroup: 3,
          },
        }}
        wrapperClass="swiper-wrapper"
        slideClass="swiper-slide"
        modules={[EffectFade, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
          horizontalClass: 'swiper-pagination-horizontal-clients',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {sliderImages.map(image => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                className="h-[38px] w-min md:h-[42px] xl:h-[84px]"
                priority
                alt={image.alt}
                src={image.image.url}
                width={image.image.width}
                height={image.image.height}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
