import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
   Button,
   CircularProgress,
   Stack,
   TextField,
   Typography,
} from '@mui/material';
import { useFormik } from 'formik';

import loginImage from 'Assets/img/login.svg';
import { useLoginMutation } from 'Services';

import { toast } from 'react-toastify';
import getValidationSchema from './validationSchema';

export default function LoginForm() {
   const navigate = useNavigate();
   const [login, { isLoading }] = useLoginMutation();

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: getValidationSchema(),
      onSubmit: () => {
         login({
            email: formik.values.email,
            password: formik.values.password,
         })
            .unwrap()
            .then(() => {
               toast.success('Você agora está logado!');
               navigate('/quiz');
            });
      },
   });

   if (isLoading)
      return (
         <div style={{ display: 'grid', placeItems: 'center' }}>
            <CircularProgress size={64} />
         </div>
      );

   return (
      <form onSubmit={formik.handleSubmit}>
         <Stack
            spacing={8}
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
         >
            <Stack spacing={4} flex={1} pr={{ xs: 0, md: 8 }}>
               <Typography variant="h3">Login</Typography>
               <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
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
                  helperText={formik.touched.password && formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               <Button type="submit" variant="contained">
                  entrar
               </Button>
               <Typography variant="body2" textAlign="center">
                  Ainda não tem uma conta?{' '}
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                     Cadastre-se
                  </Link>
               </Typography>
            </Stack>
            <img
               src={loginImage}
               alt="login"
               style={{
                  minWidth: 250,
                  maxWidth: '35%',
               }}
            />
         </Stack>
      </form>
   );
}
