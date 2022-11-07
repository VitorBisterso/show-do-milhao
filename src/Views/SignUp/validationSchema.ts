import * as Yup from 'yup';

const requiredMessage = 'Campo obrigatório';

export default () =>
   Yup.object({
      name: Yup.string()
         .trim()
         .min(3, 'O nome deve ter pelo menos 3 caracteres')
         .required(requiredMessage),
      email: Yup.string()
         .trim()
         .email('Email inválido')
         .min(3, 'O nome deve ter pelo menos 3 caracteres')
         .required(requiredMessage),
      password: Yup.string()
         .trim()
         .min(5, 'A senha deve ter pelo menos 5 caracteres')
         .required(requiredMessage),
      confirmPassword: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Senhas diferentes')
         .required(requiredMessage),
   });
