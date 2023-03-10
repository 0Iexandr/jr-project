import { useEffect, useState } from 'react';
import { Container } from '../../components';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import Check from 'public/check.svg';
import 'react-datepicker/dist/react-datepicker.css';

const PRICE_PER_ITEM = 100;

const Contact = ({ projectTypes }) => {
  const [aerial, setAerial] = useState(0);
  const [exterior, setExterior] = useState(0);
  const [interior, setInterior] = useState(0);
  const [startDate, setStartDate] = useState('');

  const [serverState, sendToFormspree] = useFormspree('xzbqvzvg');
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

  console.log(errors);
  const onSubmitForm = data => {
    const form = { ...data, aerial, exterior, interior };
    sendToFormspree(form);
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
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="flex gap-[60px]">
            <div className="flex w-1/2 flex-col">
              <div className="relative mb-[40px]">
                <label className="flex">
                  <input
                    type="text"
                    name="name"
                    placeholder="_"
                    {...register('name')}
                    className="peer w-full border-0 border-b-[1px] border-[#ABABAB] px-0 outline-none placeholder:opacity-0"
                  />
                  <span className="absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px] ">
                    Your Name*
                  </span>
                </label>
                {errors?.name && (
                  <p className="mt mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative mb-[40px]">
                <label className="flex">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="_"
                    {...register('phone')}
                    className="peer w-full border-0 border-b-[1px] border-[#ABABAB] px-0 outline-none placeholder:opacity-0"
                  />
                  <span className="absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px] ">
                    Telephone*
                  </span>
                </label>
                {errors?.phone && (
                  <p className="mt mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="relative mb-[40px]">
                <label className="flex">
                  <input
                    type="text"
                    name="email"
                    placeholder="_"
                    {...register('email')}
                    className="peer w-full border-0 border-b-[1px] border-[#ABABAB] px-0 outline-none placeholder:opacity-0"
                  />
                  <span className="absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px] ">
                    Your Email*
                  </span>
                </label>
                {errors?.email && (
                  <p className="mt mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                    {errors.email.message}
                  </p>
                )}
              </div>
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
                    <Check className="absolute top-0 left-0 hidden h-[24px] w-[24px] border-[1.5px] border-additionalGray peer-checked:block peer-focus:outline" />
                    <span className="absolute top-0 h-[24px] w-[24px] border-[1.5px] border-additionalGray"></span>
                    <span className="ml-[35px]">{type}</span>
                  </label>
                ))}
              </div>
              <label className="calendar__container relative mb-[55px] flex justify-between border-b-[1px] border-[#ABABAB] text-[18px]">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  minDate={new Date()}
                  className='h-[50px] w-full border-none bg-[url("/calendar.svg")] bg-right-top bg-no-repeat py-0 px-0'
                />
                <span
                  className={`calendar__label absolute left-0 bottom-2 text-gray ${
                    startDate
                      ? 'translate-y-[-150%] text-[12px]'
                      : 'text-middle'
                  }`}
                >
                  Deadline
                </span>
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
        {serverState.succeeded && (
          <p className="mt-[12px] text-[20px] font-[500] leading-[24px] text-[#777777]">
            The email was sent successfully
          </p>
        )}
      </Container>
    </section>
  );
};

export default Contact;
