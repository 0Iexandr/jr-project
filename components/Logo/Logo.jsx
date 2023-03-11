import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const Logo = ({ isClickable }) => {
  return (
    <>
      {!isClickable && (
        <Image
          width="100"
          height="100"
          src="/logo.svg"
          alt="logo"
          className="h-[24px] w-[40px] md:h-[30px] md:w-[50px] xl:h-[48px] xl:w-[80px]"
        ></Image>
      )}
      {isClickable && (
        <Link href="/">
          <Image
            width="100"
            height="100"
            src="/logo.svg"
            alt="logo"
            className="h-[24px] w-[40px] md:h-[30px] md:w-[50px] xl:h-[48px] xl:w-[80px]"
          ></Image>
        </Link>
      )}
    </>
  );
};

Logo.propTypes = {
  isClickable: PropTypes.bool,
};
