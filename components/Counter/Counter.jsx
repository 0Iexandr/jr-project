import React from 'react';

function Counter({ images, current }) {
  return (
    <div className="flex text-middle">
      <span className="text-[30px] leading-[36px]  md:text-[24px] md:leading-[29px] xl:text-[44px] xl:leading-[53px]">
        {current}
      </span>
      <span className=" self-start text-[20px] leading-[24px]  md:text-[16px] md:leading-[19px] xl:text-[24px] xl:leading-[29px]">
        /{images}
      </span>
    </div>
  );
}

export default Counter;
