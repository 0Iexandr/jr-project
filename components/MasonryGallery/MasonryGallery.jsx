import * as React from 'react';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';
import { convertImage, toBase64 } from 'utils/blur';
export const MasonryGallery = ({ itemData }) => {
  return (
    <Masonry columns={2} component="ul" className="" spacing={7.5}>
      {itemData?.map(item => {
        return (
          <li key={item.id} className="group relative">
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
            <div className="overlay absolute left-0 top-0 bottom-[100px] z-10 h-[calc(100%-160px)] w-full opacity-[0] hover:opacity-[.15]"></div>
            <p className="absolute left-6 top-11 z-20 text-[28px] font-black leading-[34px] text-white opacity-[0] group-hover:opacity-100">
              {item.title}
            </p>
          </li>
        );
      })}
    </Masonry>
    // <ImageList
    //   variant="masonry"
    //   cols={2}
    //   style={{
    //     columnGap: '60px',
    //     marginBottom: '-160px',
    //   }}
    // >
    //   {itemData?.map((item, idx) => {
    //     return (
    //       <ImageListItem key={item.id} className="group pb-[160px] ">
    //         <Image
    //           className="h-auto w-full "
    //           src={item.url}
    //           alt={item.alt}
    //           width={item.width}
    //           height={item.height}
    //           placeholder="blur"
    //           blurDataURL={`data:image/svg+xml;base64,${toBase64(
    //             convertImage(item.width, item.height),
    //           )}`}
    //         />
    //         <div className="overlay absolute left-0 top-0 bottom-[100px] z-10 h-[calc(100%-160px)] w-full opacity-[1] hover:opacity-[.15]"></div>
    //         <p className="absolute left-6 top-11 z-20 text-[28px] font-black leading-[34px] text-white opacity-[1] group-hover:opacity-100">
    //           title-{item.title}
    //           width-{item.width}
    //           height-{item.height}
    //           idx-{idx}
    //         </p>
    //       </ImageListItem>
    //     );
    //   })}
    // </ImageList>
  );
};
