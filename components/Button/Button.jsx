import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = ({ text, className = '' }) => {
  return <button className={classNames('button', className)}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.string,
};
