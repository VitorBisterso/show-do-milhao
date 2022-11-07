import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
   Button,
   CircularProgress,
   Stack,
   TextField,
   Typography,
} from '@mui/material';

import { useRegisterMutation } from 'Services';
import ErrorAlert from 'Components/ErrorAlert';
import signUpImage from 'Assets/img/signup.svg';

import getValidationSchema from './validationSchema';

export default function SignUpForm() {
   const navigate = useNavigate();
   const [registerUser, { isLoading, isError }] = useRegisterMutation();

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
      validationSchema: getValidationSchema(),
      onSubmit: () => {
         registerUser({
            name: formik.values.name,
            email: formik.values.email,
            password: formik.values.password,
         })
            .unwrap()
            .then(() => navigate('/login'));
      },
   });

   if (isLoading)
      return (
         <div style={{ display: 'grid', placeItems: 'center' }}>
            <CircularProgress size={64} />
         </div>
      );

   return (
      <>
         <ErrorAlert hasError={isError} />
         <form onSubmit={formik.handleSubmit}>
            <Stack
               spacing={8}
               direction={{ xs: 'column', md: 'row' }}
               justifyContent="space-between"
               alignItems="center"
            >
               <Stack spacing={4} flex={1} pr={{ xs: 0, md: 8 }}>
                  <Typography variant="h3">Cadastro</Typography>
                  <TextField
                     label="Nome"
                     variant="outlined"
                     name="name"
                     value={formik.values.name}
                     error={Boolean(formik.touched.name && formik.errors.name)}
                     helperText={formik.touched.name && formik.errors.name}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <TextField
                     label="Email"
                     variant="outlined"
                     name="email"
                     value={formik.values.email}
                     error={Boolean(
                        formik.touched.email && formik.errors.email
                     )}
                     helperText={formik.touched.email && formik.errors.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <TextField
                     type="password"
                     label="Senha"
                     variant="outlined"
                     name="password"
                     value={formik.values.password}
                     error={Boolean(
                        formik.touched.password && formik.errors.password
                     )}
                     helperText={
                        formik.touched.password && formik.errors.password
                     }
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <TextField
                     type="password"
                     label="Confirme a senha"
                     variant="outlined"
                     name="confirmPassword"
                     value={formik.values.confirmPassword}
                     error={Boolean(
                        formik.touched.confirmPassword &&
                           formik.errors.confirmPassword
                     )}
                     helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                     }
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <Button
                     type="submit"
                     variant="contained"
                     disabled={isLoading}
                  >
                     entrar
                  </Button>
                  <Typography variant="body2" textAlign="center">
                     Já uma conta?{' '}
                     <Link to="/login" style={{ textDecoration: 'none' }}>
                        Faça login
                     </Link>
                  </Typography>
               </Stack>
               <img
                  src={signUpImage}
                  alt="signUp"
                  style={{
                     minWidth: 250,
                     maxWidth: '35%',
                  }}
               />
            </Stack>
         </form>
      </>
   );
}
