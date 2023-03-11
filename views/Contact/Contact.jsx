import { useEffect, useState } from 'react';
import { Container } from '../../components';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import Check from 'public/check.svg';
import Plus from 'public/plus.svg';
import Minus from 'public/minus.svg';
import 'react-datepicker/dist/react-datepicker.css';
import Comments from './Comments';

const PRICE_PER_ITEM = 100;
const FORMSPREE_API_KEY = process.env.FORMSPREE_API_KEY;

const projectTypes = ['Villa', 'Residential', 'Office', 'Other'];

const Contact = () => {
  const [aerial, setAerial] = useState(0);
  const [exterior, setExterior] = useState(0);
  const [interior, setInterior] = useState(0);
  const [startDate, setStartDate] = useState('');

  const totalImgQty = aerial + exterior + interior;
  const totalPrice = totalImgQty * PRICE_PER_ITEM;

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
    <section id="contacts">
      <Container>
        <h2 className="mb-[24px] text-center text-[30px] font-[700] leading-[1.2] md:mb-[32px] md:text-left md:text-[54px] xl:mb-[76px]">
          Contacts
        </h2>
        <p className="mx-auto mb-[50px] max-w-[237px] text-center text-middle leading-[1.3] text-gray md:mx-0 md:max-w-none md:text-left md:text-[24px] md:font-[700] md:text-mainBlack xl:text-[28px]">
          Make request using form below or send e-mail to{' '}
          <a href="mailto:info@jazzrender.com" className="text-mainBlack">
            info@jazzrender.com
          </a>
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="flex flex-col xl:flex-row xl:gap-[60px]">
            <div className="flex w-full flex-col xl:w-1/2">
              <div className="relative mb-[60px] xl:mb-[40px]">
                <label className="flex">
                  <input
                    type="text"
                    name="name"
                    placeholder="_"
                    {...register('name')}
                    className="peer w-full border-0 border-b-[1px] border-additionalGray px-0 outline-none placeholder:opacity-0"
                  />
                  <span className="absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px] ">
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
                    placeholder="_"
                    {...register('phone')}
                    className="peer w-full border-0 border-b-[1px] border-additionalGray px-0 outline-none placeholder:opacity-0"
                  />
                  <span className="absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px] ">
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
                    placeholder="_"
                    {...register('email')}
                    className="peer w-full border-0 border-b-[1px] border-additionalGray px-0 outline-none placeholder:opacity-0"
                  />
                  <span className="absolute top-[50%] translate-y-[-170%] text-[12px] text-gray transition-transform peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-middle peer-focus:translate-y-[-170%] peer-focus:text-[12px] ">
                    Your Email*
                  </span>
                </label>
                {errors?.email && (
                  <p className="mb-24px absolute left-0 bottom-[-17px] text-[11px] leading-[13px] text-[#B60606]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Comments register={register} />
            </div>
            <div className="w-full xl:w-1/2">
              <p className="mb-[33px] text-middle md:mb-[25px] xl:mb-[21px]">
                Choose Project Type*
              </p>
              <ul className="mb-[46px] flex flex-col justify-between gap-[46px] text-middle md:mb-[60px] md:flex-row md:gap-0 xl:mb-[40px]">
                {projectTypes.map(type => (
                  <li key={type}>
                    <label className="relative flex cursor-pointer select-none gap-[12px]">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        {...register('project-type')}
                        className="peer absolute h-0 w-0 cursor-pointer opacity-0"
                        defaultChecked={type === 'Villa'}
                      />
                      <Check className="absolute top-0 left-0 hidden h-[24px] w-[24px] border-[1.5px] border-additionalGray peer-checked:block peer-focus:outline" />
                      <span className="absolute top-0 h-[24px] w-[24px] border-[1.5px] border-additionalGray"></span>
                      <span className="ml-[35px]">{type}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <label className="calendar__container relative mb-[60px] flex justify-between border-b-[1px] border-additionalGray text-middle xl:mb-[55px]">
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
                        name={type.name}
                        onClick={setQty}
                        value="-"
                        disabled={!type.state}
                        className="block h-full text-[30px] font-[600]"
                      >
                        <Minus
                          className={`${
                            !type.state
                              ? 'stroke-additionalGray'
                              : 'stroke-[#000]'
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
              <Comments register={register} />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black py-[10px] px-[70px] font-[700] leading-[1.3] tracking-[0.05em] text-white xl:mt-[45px]"
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
