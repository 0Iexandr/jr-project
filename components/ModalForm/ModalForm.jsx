import { useForm as useFormspree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { schema } from '../../views/Contact/schema';
import { Modal } from '@mui/material';
import Close from 'public/close.svg';

const FORMSPREE_API_KEY = process.env.NEXT_PUBLIC_FORMSPREE_QUESTIONS_API_KEY;

export const ModalForm = ({ isModalOpen, setIsModalOpen }) => {
  const [serverState, sendToFormspree] = useFormspree(`${FORMSPREE_API_KEY}`);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (serverState.succeeded) {
      reset();
    }
  }, [serverState.succeeded, reset]);

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-contact-us"
      className="flex items-center justify-center bg-modalBg"
    >
      <div className="w-[90%] bg-white py-[40px] px-[40px] outline-none md:w-[630px] md:py-[76px] md:px-[79px]">
        <div className="flex justify-between">
          <h1 className="mb-[40px] max-w-[80%] text-[20px] font-[550] leading-[1.3] tracking-[0.02em] md:max-w-[292px] md:text-[24px]">
            HAVE ANY QUESTIONS? CONTACT US!
          </h1>
          <button
            type="button"
            aria-label="Close"
            className="block h-[24px] w-[24px]"
            onClick={() => setIsModalOpen(false)}
          >
            <Close />
          </button>
        </div>

        <form className="w-full" onSubmit={handleSubmit(sendToFormspree)}>
          <div className="relative mb-[60px] xl:mb-[40px]">
            <label className="flex">
              <input
                type="text"
                name="name"
                placeholder=" "
                {...register('name')}
                className="peer w-full border-0 border-b-[1px] border-additionalGray px-0 outline-none"
              />
              <span className="pointer-events-none absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px]">
                Your Name*
              </span>
            </label>
            {errors?.name && (
              <p className="mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="relative mb-[60px] xl:mb-[40px]">
            <label className="flex">
              <input
                type="tel"
                name="phone"
                placeholder=" "
                {...register('phone')}
                className="peer w-full border-0 border-b-[1px] border-additionalGray px-0 outline-none"
              />
              <span className="pointer-events-none absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px]">
                Telephone*
              </span>
            </label>
            {errors?.phone && (
              <p className="mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="relative mb-[55px] xl:mb-[40px]">
            <label className="flex">
              <input
                type="text"
                name="email"
                placeholder=" "
                {...register('email')}
                className="peer w-full border-0 border-b-[1px] border-additionalGray px-0 outline-none"
              />
              <span className="pointer-events-none absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px]">
                Your Email*
              </span>
            </label>
            {errors?.email && (
              <p className="mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black py-[10px] px-[70px] font-[700] leading-[1.3] tracking-[0.05em] text-white"
          >
            SEND
          </button>
        </form>
        {serverState.succeeded && (
          <p className="mt-[12px] text-[20px] font-[500] leading-[24px] text-[#777777]">
            The email was sent successfully
          </p>
        )}
      </div>
    </Modal>
  );
};
