import { useState } from 'react';

const FilterBtnList = ({ clickAction }) => {
  const btnNames = ['All', 'Interior', 'Exterior'];
  const [activeBtn, setActiveBtn] = useState(btnNames[0]);
  const onBtnClick = e => {
    const btnName = e.target.name;
    clickAction(btnName);
    setActiveBtn(btnName);
  };
  return (
    <ul className="flex h-min gap-10">
      {btnNames.map(el => (
        <li key={el}>
          <button
            className={`text-small uppercase tracking-wider ${
              activeBtn === el
                ? 'font-black text-mainBlack'
                : 'font-bold text-gray'
            }`}
            name={el}
            type="button"
            onClick={onBtnClick}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterBtnList;
