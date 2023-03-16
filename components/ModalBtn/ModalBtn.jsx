import PropTypes from 'prop-types';

export const ModalBtn = ({ text, className }) => {
  return (
    <button
      className={`inline-block border-2 border-solid border-mainBlack py-[8px] px-[30px] text-small font-bold uppercase tracking-wider ${className} hover:border-[#333333] hover:bg-[#333333] hover:text-white focus:border-[#333333] focus:bg-[#333333] focus:text-white`}
    >
      {text}
    </button>
  );
};

ModalBtn.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.string,
};
