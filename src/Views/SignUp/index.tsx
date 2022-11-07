import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';

import signUpImage from 'Assets/img/signup.svg';

export default function SignUpForm() {
   const navigate = useNavigate();

   return (
      <Stack
         spacing={8}
         direction={{ xs: 'column', md: 'row' }}
         justifyContent="space-between"
         alignItems="center"
      >
         <Stack spacing={4} flex={1} pr={{ xs: 0, md: 8 }}>
            <Typography variant="h3">Cadastro</Typography>
            <TextField label="Email" variant="outlined" />
            <TextField type="password" label="Senha" variant="outlined" />
            <TextField
               type="password"
               label="Confirme a senha"
               variant="outlined"
            />
            <Button variant="contained" onClick={() => navigate('/login')}>
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
   );
}
