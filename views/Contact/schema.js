import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('*Enter your name!'),
  phone: yup.number().typeError('*Enter your correct phone number!'),
  email: yup.string().email().required('*Enter your correct email!'),
});
