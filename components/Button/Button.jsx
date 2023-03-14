import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export const Button = ({ text }) => {
  return <Link>{text}</Link>;
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
};
