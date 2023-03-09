import PropTypes from 'prop-types';

export const ModalBtn = ({ text }) => {
  return (
    <button className="mt-[24px] inline-block border-none bg-mainBlack py-[10px] px-[33px] text-small font-bold uppercase tracking-wider text-white">
      {text}
    </button>
  );
};

ModalBtn.propTypes = {
  text: PropTypes.node.isRequired,
};
