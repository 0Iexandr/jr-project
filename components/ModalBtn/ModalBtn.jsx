import PropTypes from 'prop-types';
import { useState } from 'react';
import { ModalForm } from '../ModalForm/ModalForm';

export const ModalBtn = ({ text, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`inline-block border-[2px] border-solid border-[#222222] py-[10px] px-[32px] text-small font-bold uppercase tracking-wider hover:border-[#333333] hover:bg-[#333333] hover:text-white focus:border-[#333333] focus:bg-[#333333] focus:text-white ${className}`}
      >
        {text}
      </button>
      {isModalOpen && (
        <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

ModalBtn.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.string,
};
