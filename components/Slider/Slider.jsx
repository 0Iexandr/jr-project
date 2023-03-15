import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectFade, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';
import { convertImage, toBase64 } from 'utils/blur';

export default function Slider({ sliderImages }) {
  return (
    <div>
      <Swiper
        className=""
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
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
                priority
                alt={image.alt}
                src={image.image.url}
                width={image.image.width}
                height={image.image.height}
                className="h-[380px] object-cover md:h-[420px] xl:h-[656px]"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(image.image.width, image.image.height),
                )}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
