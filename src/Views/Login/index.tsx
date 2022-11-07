import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';

import loginImage from 'Assets/img/login.svg';

export default function LoginForm() {
   const navigate = useNavigate();

   return (
      <Stack
         spacing={8}
         direction={{ xs: 'column', md: 'row' }}
         justifyContent="space-between"
         alignItems="center"
      >
         <Stack spacing={4} flex={1} pr={{ xs: 0, md: 8 }}>
            <Typography variant="h3">Login</Typography>
            <TextField label="Email" variant="outlined" />
            <TextField type="password" label="Senha" variant="outlined" />
            <Button variant="contained" onClick={() => navigate('/quiz')}>
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
   );
}
