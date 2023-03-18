import * as React from 'react';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';
import { convertImage, toBase64 } from 'utils/blur';
import * as basicLightbox from 'basiclightbox';
import 'node_modules/basiclightbox/dist/basicLightbox.min.css';
export const MasonryGallery = ({ itemData }) => {
  function onImageClick(src) {
    const instance = basicLightbox.create(`
      <img src="${src}" width="800" height="600">
    `);
    instance.show();
  }
  return (
    <Masonry
      columns={2}
      component="ul"
      sx={{ overflowAnchor: 'none' }}
      spacing={7.5}
    >
      {itemData?.map(item => {
        return (
          <li
            onClick={() => {
              onImageClick(item.url);
            }}
            key={item.id}
            className="group relative"
          >
            <Image
              className="h-auto w-full "
              src={item.url}
              alt={item.alt}
              width={item.width}
              height={item.height}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(item.width, item.height),
              )}`}
            />
            <div className="overlay absolute left-0 top-0 bottom-[0] z-10 h-full w-full opacity-[0] hover:opacity-[.15]"></div>
            <p className="absolute left-6 top-11 z-20 text-[28px] font-black leading-[34px] text-white opacity-[0] group-hover:opacity-100">
              {item.title}
            </p>
          </li>
        );
      })}
    </Masonry>
  );
};
export default MasonryGallery;
