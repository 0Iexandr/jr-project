import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectFade, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const ClientsSlider = ({ sliderImages }) => {
  const isDesctop = useMediaQuery({
    query: '(min-width: 1320px)',
  });
  return (
    <div className="clients-swiper">
      <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={isDesctop ? 87 : 40}
        freeMode={true}
        wrapperClass="swiper-wrapper"
        slideClass="swiper-slide"
        modules={[EffectFade, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
          horizontalClass: 'swiper-pagination-horizontal-clients',
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {sliderImages.map((image, idx) => {
          return (
            <SwiperSlide key={image.id + idx}>
              <Image
                className="h-[38px] w-min md:h-[42px] xl:h-[84px]"
                priority
                alt={image.alt}
                src={image.image.secure_url}
                width={image.image.width}
                height={image.image.height}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
