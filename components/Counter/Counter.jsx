import React from 'react';

function Counter({ steps, current }) {
  return (
    <div className="text-middle">
      <span className="align-baseline text-[30px] font-bold leading-none md:text-[24px]  xl:text-[44px] ">
        {current.toString().padStart(2, '0')}
      </span>
      <span
        className={`${
          current !== steps ? 'text-additionalGray' : 'text-mainBlack'
        }  relative  bottom-[7px] mr-[5px] ml-[5px] align-baseline text-[20px] font-bold leading-none md:mr-[6px] md:ml-[6px] md:text-[16px] xl:bottom-[15px] xl:text-[24px] `}
      >
        /
      </span>
      <span
        className={`relative bottom-[7px] align-baseline text-[20px] font-bold leading-none ${
          current !== steps ? 'text-additionalGray' : 'text-mainBlack'
        }  md:text-[16px]  xl:bottom-[15px] xl:text-[24px]`}
      >
        {steps.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
export default Counter;
