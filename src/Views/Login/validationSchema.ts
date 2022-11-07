import * as Yup from 'yup';

const requiredMessage = 'Campo obrigatório';

export default () =>
   Yup.object({
      email: Yup.string()
         .trim()
         .email('Email inválido')
         .required(requiredMessage),
      password: Yup.string().trim().required(requiredMessage),
   });
