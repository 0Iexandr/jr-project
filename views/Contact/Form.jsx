import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/schema';
import Comments from './Comments';
import Check from 'public/check.svg';
import Plus from 'public/plus.svg';
import Minus from 'public/minus.svg';
import 'react-datepicker/dist/react-datepicker.css';

const FORMSPREE_API_KEY = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_API_KEY;

const Form = ({ price, projectTypes }) => {
  const [aerial, setAerial] = useState(0);
  const [exterior, setExterior] = useState(0);
  const [interior, setInterior] = useState(0);
  const [startDate, setStartDate] = useState('');

  const totalImgQty = aerial + exterior + interior;
  const totalPrice = totalImgQty * price;

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

  const onSubmitForm = data => {
    const form = {
      ...data,
      deadline: startDate,
      aerial,
      exterior,
      interior,
      totalPrice,
    };
    sendToFormspree(form);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="flex flex-col xl:flex-row xl:gap-[60px]">
        <div className="flex w-full flex-col xl:w-1/2">
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
          <div className="relative mb-[60px] xl:mb-[40px]">
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
          <Comments register={register} className="max-xl:hidden" />
        </div>
        <div className="w-full xl:w-1/2">
          <div className="relative mb-[46px] md:mb-[60px] xl:mb-[40px]">
            <p className="mb-[33px] text-middle md:mb-[25px] xl:mb-[21px]">
              Choose Project Type*
            </p>
            <ul className="flex flex-col justify-between gap-[46px] text-middle md:flex-row md:gap-0">
              {projectTypes.map(item => (
                <li key={item.id}>
                  <label className="relative flex cursor-pointer select-none gap-[12px]">
                    <input
                      type="radio"
                      name="type"
                      value={item.projectType}
                      {...register('projectType')}
                      className="peer absolute h-0 w-0 cursor-pointer opacity-0"
                    />
                    <Check className="absolute top-0 left-0 hidden h-[24px] w-[24px] peer-checked:block peer-focus:outline" />
                    <span className="absolute top-0 left-0 h-[24px] w-[24px] border-[1.5px] border-additionalGray peer-checked:border-mainBlack"></span>
                    <span className="ml-[35px]">{item.projectType}</span>
                  </label>
                </li>
              ))}
            </ul>
            {errors?.projectType && (
              <p className="mb-24px absolute left-0 bottom-[-30px] text-[11px] leading-[13px] text-[#B60606]">
                {errors.projectType.message}
              </p>
            )}
          </div>
          <div className="group relative mb-[60px] h-[51px] border-b-[1px] border-additionalGray xl:mb-[55px]">
            <DatePicker
              id="deadline"
              selected={startDate}
              onChange={date => setStartDate(date)}
              minDate={new Date()}
              wrapperClassName="group absolute top-0 left-0"
              className='h-[50px] w-full border-none bg-[url("/calendar.svg")] bg-right-top bg-no-repeat py-0 px-0'
            />

            <label
              htmlFor="deadline"
              className={`absolute left-0 bottom-2 z-10 text-gray group-focus-within:translate-y-[-180%] group-focus-within:text-[12px] ${
                startDate ? 'translate-y-[-180%] text-[12px]' : 'text-middle'
              }`}
            >
              Deadline
            </label>
          </div>

          <p className="mb-[24px] hidden text-middle md:block">
            Image Quantity:
          </p>
          <ul className="mb-[60px] flex flex-col justify-between gap-[50px] md:flex-row md:gap-0 xl:mb-[51px]">
            {imageTypes.map(type => (
              <li
                className="flex flex-row-reverse items-center justify-between md:flex-col md:justify-start"
                key={type.name}
              >
                <div className="flex w-[113px] items-center justify-between md:mb-[16px] xl:mb-[8px]">
                  <button
                    type="button"
                    aria-label="Minus"
                    name={type.name}
                    onClick={setQty}
                    value="-"
                    disabled={!type.state}
                    className="block h-full text-[30px] font-[600]"
                  >
                    <Minus
                      className={`${
                        !type.state ? 'stroke-additionalGray' : 'stroke-[#000]'
                      }`}
                    />
                  </button>
                  <span
                    className={`text-[28px] font-[700] ${
                      !type.state ? 'text-additionalGray' : ''
                    }`}
                  >
                    {type.state}
                  </span>
                  <button
                    type="button"
                    aria-label="Plus"
                    name={type.name}
                    value="+"
                    onClick={setQty}
                    className="text-[30px] font-[600]"
                  >
                    <Plus />
                  </button>
                </div>
                <p className="text-middle font-[700] leading-[1.45] md:text-small md:font-[400]">
                  {type.title}
                  <span className="block text-small font-[400] text-gray md:hidden">
                    Image Quantity
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <div className="mb-[12px] flex justify-between border-b-[1px] border-mainBlack pb-[4px] text-middle font-[700] leading-[1.45]">
            <p>Total Price</p>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
          <div className="mb-[60px] flex justify-between text-gray xl:mb-0">
            <p>Total Image Quantity</p>
            <span>{totalImgQty}</span>
          </div>
          <Comments register={register} className="xl:hidden" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-black py-[10px] px-[70px] font-[700] leading-[1.3] tracking-[0.05em] text-white hover:border-[#333333] hover:bg-[#333333] hover:text-white focus:border-[#333333] focus:bg-[#333333] focus:text-white xl:mt-[45px]"
      >
        SEND
      </button>
      {serverState.succeeded && (
        <p className="mt-[12px] text-[20px] font-[500] leading-[24px] text-[#777777]">
          The email was sent successfully
        </p>
      )}
    </form>
  );
};

export default Form;
