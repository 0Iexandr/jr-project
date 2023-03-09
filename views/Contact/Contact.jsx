import { useState } from 'react';
import { Container } from '../../components';

const PRICE_PER_ITEM = 100;

const Contact = ({ projectTypes }) => {
  const [aerial, setAerial] = useState(1);
  const [exterior, setExterior] = useState(0);
  const [interior, setInterior] = useState(0);

  const imageTypes = [
    { state: aerial, title: 'Aerial', name: 'aerial' },
    { state: exterior, title: '3D Exterior', name: 'exterior' },
    { state: interior, title: '3D Interior', name: 'interior' },
  ];

  const setQty = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    const isIncrement = value === '+';
    const setStateValue = prev => (isIncrement ? prev + 1 : prev - 1);

    switch (name) {
      case 'aerial':
        setAerial(setStateValue);
        break;
      case 'exterior':
        setExterior(setStateValue);
        break;
      default:
        setInterior(setStateValue);
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
  };

  const totalImgQty = aerial + exterior + interior;
  const totalPrice = totalImgQty * PRICE_PER_ITEM;

  return (
    <section id="contacts">
      <Container>
        <h2 className="mb-[76px] text-[54px] font-[700] leading-[1.2]">
          Contacts
        </h2>
        <p className="mb-[50px] text-[28px] font-[700] leading-[1.3]">
          Make request using form below or send e-mail to info@jazzrender.com
        </p>
        <form className="w-full" onSubmit={onSubmitForm}>
          <div className="flex gap-[60px]">
            <div className="flex w-1/2 flex-col">
              <label className="relative mb-[40px] flex">
                <input
                  type="text"
                  className="peer w-full border-0 border-b-[1px] border-[#ABABAB] px-0 outline-none placeholder:opacity-0"
                  placeholder="_"
                />
                <span className="absolute top-[50%] translate-y-[-200%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-200%] peer-focus:text-[12px]">
                  Your Name*
                </span>
              </label>
              <label className="relative mb-[40px] flex">
                <input
                  type="number"
                  className="peer w-full border-0 border-b-[1px] border-[#ABABAB] px-0 outline-none placeholder:opacity-0"
                  placeholder="_"
                />
                <span className="absolute top-[50%] translate-y-[-200%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-200%] peer-focus:text-[12px]">
                  Telephone*
                </span>
              </label>
              <label className="relative mb-[40px] flex">
                <input
                  type="text"
                  className="peer w-full border-0 border-b-[1px] border-[#ABABAB] px-0 outline-none placeholder:opacity-0"
                  placeholder="_"
                />
                <span className="absolute top-[50%] translate-y-[-200%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-200%] peer-focus:text-[12px]">
                  Your Email*
                </span>
              </label>
              <p className="mb-[4px] text-[#585858]">
                Feel free to leave your comments
              </p>
              <textarea className="h-full resize-none border-[1px] border-[#ABABAB] px-2 py-2 outline-none" />
            </div>
            <div className="w-1/2">
              <p className="mb-[21px] text-[18px]">Choose Project Type*</p>
              <div className="mb-[40px] flex justify-between text-[18px]">
                {projectTypes.map(type => (
                  <label
                    className="relative flex cursor-pointer select-none gap-[12px]"
                    key={type}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      className="peer absolute h-0 w-0 cursor-pointer opacity-0"
                      defaultChecked={type === 'Villa'}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      className="absolute top-0 left-0 hidden h-[24px] w-[24px] border-[1.5px] border-additionalGray peer-checked:block peer-focus:outline"
                    >
                      <path
                        fill="#222"
                        stroke="#222"
                        strokeWidth="1.5"
                        d="M.75.75h22.5v22.5H.75z"
                      />
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="m7 11.048 3.687 4.748a.2.2 0 0 0 .317-.001L17 8"
                      />
                    </svg>
                    <span className="absolute top-0 h-[24px] w-[24px] border-[1.5px] border-additionalGray"></span>
                    <span className="ml-[35px]">{type}</span>
                  </label>
                ))}
              </div>
              <label className="mb-[55px] flex justify-between border-b-[1px] border-[#ABABAB] text-[18px]">
                <span>Deadline</span>
                <input type="date" />
              </label>
              <p className="mb-[24px] text-[18px]">Image Quantity:</p>
              <ul className="mb-[51px] flex justify-between">
                {imageTypes.map(type => (
                  <li className="flex flex-col items-center" key={type.name}>
                    <div className="mb-[8px] flex items-center gap-[28px]">
                      <button
                        type="button"
                        name={type.name}
                        onClick={setQty}
                        value="-"
                        disabled={!type.state}
                        className="block h-full text-[30px] font-[600]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="2"
                          className={`${
                            !type.state ? 'stroke-[#ABABAB]' : 'stroke-[#000]'
                          }`}
                        >
                          <path strokeWidth="2" d="M0 1h16" />
                        </svg>
                      </button>
                      <span
                        className={`text-[28px] font-[700] ${
                          !type.state ? 'text-[#ABABAB]' : ''
                        }`}
                      >
                        {type.state}
                      </span>
                      <button
                        type="button"
                        name={type.name}
                        value="+"
                        onClick={setQty}
                        className="text-[30px] font-[600]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path
                            stroke="#000"
                            strokeWidth="2"
                            d="M0 8h16M8 0v16"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-[14px] leading-[1.45]">{type.title}</p>
                  </li>
                ))}
              </ul>
              <div className="mb-[12px] flex justify-between border-b-[1px] border-[#222222] pb-[4px] text-[18px] font-[700] leading-[1.45]">
                <p>Total Price</p>
                <span>{totalPrice.toFixed(2)} $</span>
              </div>
              <div className="flex justify-between text-[#585858]">
                <p>Total Image Quantity</p>
                <span>{totalImgQty}</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-[45px] bg-black py-[10px] px-[70px] font-[700] leading-[1.3] tracking-[0.05em] text-white"
          >
            SEND
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
