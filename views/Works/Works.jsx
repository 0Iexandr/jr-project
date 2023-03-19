import Container from 'components/Container/Container';
import FilterBtnList from 'components/FilterBtnList/FilterBtnList';
import MasonryGallery from 'components/MasonryGallery/MasonryGallery';
import MobileGallery from 'components/MasonryGallery/MobileGallery';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';

const Works = ({ data }) => {
  const [allImages, setAllImages] = useState();
  const [filteredImages, setFilteredImages] = useState(null);
  const [renderImages, setRenderImages] = useState(null);
  const [showMoreBtnShouldRender, setshowMoreBtnShouldRender] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
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
    const formatedData = data?.work.map(el => {
      return {
        id: el.id,
        alt: el.alt,
        title: el.alt,
        url: el.image.secure_url,
        type: el.workType,
        width: el.image.width,
        height: el.image.height,
      };
    });
    setAllImages(formatedData);
    setFilteredImages([...formatedData]);
  }, [allImages, data?.work]);

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
    <section
      ref={ref}
      id="works"
      className="mb-[80px] md:mb-[100px] xl:mb-[120px]"
    >
      <Container>
        {inView && (
          <div>
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
                className="mx-auto mt-[60px] block text-small font-bold uppercase tracking-wider text-gray hover:text-[#333333] md:mt-[100px]"
                onClick={onShowMoreBtnClick}
              >
                show more
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Works;
