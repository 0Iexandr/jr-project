import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export const Button = ({ text, href, className }) => {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
};
