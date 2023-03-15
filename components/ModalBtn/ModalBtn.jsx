import PropTypes from 'prop-types';

export const ModalBtn = ({ text, className }) => {
  return (
    <button
      className={`inline-block py-[10px] px-[33px] text-small font-bold uppercase tracking-wider ${className}`}
      // className={`inline-block border-none bg-mainBlack py-[10px] px-[33px] text-small font-bold uppercase tracking-wider text-white ${className}`}
    >
      {text}
    </button>
  );
};

ModalBtn.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.string,
};
