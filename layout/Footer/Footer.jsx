import { Container } from '@/components';
// import Image from 'next/image';
import ArrowTop from 'public/arrow-top.svg';
import { Logo } from '../../components/Logo/Logo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // if (!data) {
  //   return null;
  // }

  return (
    <footer>
      <Container className="relative flex flex-col items-center justify-between pt-[58px] pb-[32px] after:absolute after:top-0 after:left-[50%] after:block after:h-[1px] after:w-[calc(100%-40px)] after:translate-x-[-50%] after:bg-[#D5D5D5] md:pt-[47px] md:after:w-[calc(100%-120px)] xl:items-start xl:after:w-[calc(100%-40px)]">
        <div className="mb-[50px] flex w-full flex-col items-center justify-between xl:mb-[24px] xl:flex-row xl:items-end">
          <div className="mb-[50px] flex flex-col items-center md:mb-[46px] xl:mb-0 xl:items-start">
            <Logo className="mb-[21px] h-[49px] w-[82px] border-[1px] md:h-[51px] md:w-[84px]" />
            <p className="flex max-w-[162px] flex-col items-center text-[16px] text-gray xl:items-start">
              <span>Jazz Render</span>
              {/* <span>{data.address}</span> */}
            </p>
          </div>
          <div className="flex flex-col items-center gap-[40px] md:gap-[24px] xl:mb-[5px] xl:items-start xl:gap-[20px]">
            {/* <a
              href={`mailto:${data.email}`}
              className="text-[16px] text-mainBlack hover:underline"
            >
              {data.email}
            </a> */}
            <div className="flex flex-col gap-[50px] xl:flex-row xl:gap-[30px]">
              <div className="grid grid-cols-3 gap-x-[24px] gap-y-[22px] md:grid-cols-6">
                {/* {data.socialIcons.map(icon => (
                  <a
                    className="h-[44px] w-[44px] cursor-pointer"
                    key={icon.id}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Image
                      src={icon.image.secure_url}
                      alt={icon.alt}
                      width={icon.image.width}
                      height={icon.image.height}
                      // className="transition-all hover:contrast-[2] hover:invert-[90%]"
                    />
                  </a>
                ))} */}
              </div>
              <button
                className="group flex flex-col items-center justify-end"
                onClick={scrollToTop}
              >
                <ArrowTop className="mb-[8px] fill-mainBlack transition-colors group-hover:fill-gray" />
                <span className="text-[12px] font-[700] leading-[14px] tracking-[0.05em] transition-colors group-hover:text-gray">
                  BACK TO TOP
                </span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-[12px] text-additionalGray">
          Copyright &copy; Jazz Render 2023
        </p>
      </Container>
    </footer>
  );
};
