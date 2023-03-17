import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Logo = ({ isClickable, className = '' }) => {
  return (
    <>
      {!isClickable && (
        <Image
          width="100"
          height="100"
          src="/logo.svg"
          alt="logo"
          className={className}
        ></Image>
      )}
      {isClickable && (
        <Link href="/">
          <Image
            width="100"
            height="100"
            src="/logo.svg"
            alt="logo"
            className={className}
          ></Image>
        </Link>
      )}
    </>
  );
};

export default Logo;

Logo.propTypes = {
  isClickable: PropTypes.bool,
};
