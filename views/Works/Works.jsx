import { Container } from '@/components';
import { FilterBtnList } from 'components/FilterBtnList/FilterBtnList';
import { MasonryGallery } from 'components/MasonryGallery/MasonryGallery';
import { MobileGallery } from 'components/MasonryGallery/MobileGallery';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const imagesForMasonry = [
  {
    url: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.png',
    alt: 'abstraction',
    type: 'interior',
    width: 1260,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png',
    alt: 'abstraction',
    type: 'interior',
    width: 1260,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/3780104/pexels-photo-3780104.png',
    alt: 'abstraction',
    type: 'interior',
    width: 1260,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/2249961/pexels-photo-2249961.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 1260,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 500,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/3435272/pexels-photo-3435272.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 563,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/1910230/pexels-photo-1910230.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 500,
    height: 750,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 600,
    height: 900,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/2892606/pexels-photo-2892606.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 600,
    height: 900,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/4068339/pexels-photo-4068339.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 600,
    height: 900,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg',
    alt: 'abstraction',
    type: 'interior',
    width: 900,
    height: 900,
    title: 'Short Title',
  },
  {
    url: 'https://images.pexels.com/photos/1934846/pexels-photo-1934846.jpeg',
    alt: 'abstraction',
    type: 'exterior',
    width: 600,
    height: 900,
    title: 'Short Title',
  },
];

export const Works = () => {
  const [allImages, setAllImages] = useState(null);
  const [filteredImages, setFilteredImages] = useState(null);
  const [renderImages, setRenderImages] = useState(null);
  const [showMoreBtnShouldRender, setshowMoreBtnShouldRender] = useState(false);

  const isDesctop = useMediaQuery({
    query: '(min-width: 1320px)',
  });

  useEffect(() => {
    if (!filteredImages) {
      return;
    }
    if (filteredImages.length <= 8) {
      setRenderImages([...filteredImages]);
      setshowMoreBtnShouldRender(false);
    }
    if (filteredImages.length > 8) {
      setRenderImages([...filteredImages].slice(0, 8));
      setshowMoreBtnShouldRender(true);
    }
  }, [filteredImages]);
  useEffect(() => {
    if (allImages) {
      return;
    }
    setAllImages(imagesForMasonry);
    setFilteredImages([...imagesForMasonry]);
  }, [allImages]);

  const onFilterBtnClick = btnName => {
    switch (btnName) {
      case 'All':
        setFilteredImages([...allImages]);
        break;
      case 'Interior':
        setFilteredImages(
          [...allImages].filter(
            el => el.type.toLowerCase() === btnName.toLowerCase(),
          ),
        );
        break;
      case 'Exterior':
        setFilteredImages(
          [...allImages].filter(
            el => el.type.toLowerCase() === btnName.toLowerCase(),
          ),
        );
        break;
    }
  };

  const onShowMoreBtnClick = () => {
    setRenderImages([...filteredImages]);
    setshowMoreBtnShouldRender(false);
  };
  return (
    <section className="mb-[80px] md:mb-[100px] xl:mb-[120px]">
      <Container>
        <div className="mb-[24px] flex flex-col gap-8 md:mb-[17px] md:flex-row md:items-baseline md:justify-between md:gap-0">
          <h2 className=" text-3xl font-bold md:text-[34px] md:leading-10 xl:text-large">
            Works
          </h2>
          <FilterBtnList clickAction={onFilterBtnClick} />
        </div>
        {isDesctop && renderImages && (
          <MasonryGallery itemData={renderImages} />
        )}
        {!isDesctop && renderImages && (
          <MobileGallery itemData={renderImages} />
        )}
        {showMoreBtnShouldRender && (
          <button
            className="mx-auto mt-[60px] block text-small font-bold uppercase tracking-wider text-gray hover:text-[#333333] md:mt-[100px] xl:mt-0"
            onClick={onShowMoreBtnClick}
          >
            show more
          </button>
        )}
      </Container>
    </section>
  );
};
