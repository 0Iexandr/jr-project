import { memo } from 'react';

const Comments = ({ className, comments, setComments }) => {
  return (
    <>
      <label htmlFor="comments" className={`mb-[4px] text-gray ${className}`}>
        Feel free to leave your comments
      </label>
      <textarea
        id="comments"
        value={comments}
        onChange={e => setComments(e.target.value)}
        className={`mb-[60px] h-[226px] w-full resize-none border-[1px] border-additionalGray px-2 py-2 outline-none md:h-[160px] xl:mb-[0] xl:h-full ${className}`}
      />
    </>
  );
};

export default memo(Comments);
