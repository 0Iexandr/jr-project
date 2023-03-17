import classNames from 'classnames';
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
