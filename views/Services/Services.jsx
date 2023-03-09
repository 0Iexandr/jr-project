import Image from 'next/image';
import { Container } from 'components/Container/Container';
import { Link } from 'react-scroll';

const dataForServicesRender = [
  {
    id: 1,
    image: {
      url: 'https://images.pexels.com/photos/4431922/pexels-photo-4431922.jpeg',
      alt: 'lego',
    },
    textBlock: {
      title: 'Aerial',
      discription:
        'See how your residential and commercial project look from the clouds with 3D aerial visualization tools',
      btnText: 'Start Project',
    },
  },
  {
    id: 2,
    image: {
      url: 'https://images.pexels.com/photos/989941/pexels-photo-989941.jpeg',
      alt: 'lego',
    },
    textBlock: {
      title: '3D Exterior',
      discription:
        'Let your projects shine in a new light to spark interest and catch attention with 3D exterior visualization',
      btnText: 'Start Project',
    },
  },
  {
    id: 3,
    image: {
      url: 'https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg',
      alt: 'lego',
    },
    textBlock: {
      title: '3D Interior',
      discription:
        'Communicate the elegance of your design ideas to clients and the community in the best possible way with 3D interior rendering',
      btnText: 'Start Project',
    },
  },
];

export const Services = () => {
  return (
    <section className="mb-[80px]">
      <Container>
        <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-[34px] md:leading-10 xl:mb-[4.75rem] xl:text-large">
          Services
        </h2>
        <ul>
          {dataForServicesRender.map(el => {
            return (
              <li
                key={el.id}
                className="mb-[60px] last:mb-0 md:mb-20 xl:mb-[100px] xl:flex xl:gap-[60px] xl:even:flex-row-reverse"
              >
                <div className="-mb-2 h-[100vw] pb-10 sm:mb-8 sm:h-[440px] sm:w-[440px] sm:pb-0 md:h-[329px] md:w-[648px] xl:mb-0 xl:h-[480px] xl:w-[945px]">
                  <Image
                    className="h-full w-full object-cover"
                    src={el.image.url}
                    alt={el.image.alt}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="xl:w-[275px]">
                  <h3 className="mb-4 text-xl font-bold leading-[26px] md:text-[24px] md:leading-[30px] xl:mb-6 xl:text-big">
                    {el.textBlock.title}
                  </h3>
                  <p className="mb-6 text-lg leading-[26px] text-gray xl:mb-8">
                    {el.textBlock.discription}
                  </p>
                  <Link className="items-center justify-center bg-mainBlack px-[33px] py-[10px] text-sm font-bold uppercase leading-[18px] tracking-wider text-white">
                    {el.textBlock.btnText}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
