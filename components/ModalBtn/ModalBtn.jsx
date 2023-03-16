import PropTypes from 'prop-types';
import { useState } from 'react';
import { ModalForm } from '../ModalForm/ModalForm';

export const ModalBtn = ({ text, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`inline-block py-[10px] px-[33px] text-small font-bold uppercase tracking-wider ${className}`}
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
