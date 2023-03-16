import { memo } from 'react';

const Comments = ({ register, className }) => {
  return (
    <>
      <p className="mb-[4px] text-gray">Feel free to leave your comments</p>
      <textarea
        {...register('comments')}
        className={`mb-[60px] h-[226px] w-full resize-none border-[1px] border-additionalGray px-2 py-2 outline-none md:h-[160px] xl:mb-[0] xl:h-full ${className}`}
      />
    </>
  );
};

export default memo(Comments);
