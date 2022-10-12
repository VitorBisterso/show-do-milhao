import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

import logo from 'assets/img/logo.png';

export default function Home() {
   const navigate = useNavigate();

   return (
      <Stack
         textAlign="center"
         justifyContent="center"
         alignItems="center"
         spacing={8}
      >
         <img
            src={logo}
            alt="logo"
            style={{ minWidth: '30%', maxWidth: '250px' }}
         />
         <Typography variant="h4">
            Acha que consegue se tornar o próximo milionário?
         </Typography>
         <Box>
            <Button variant="contained" onClick={() => navigate('/login')}>
               comece a jogar!
            </Button>
         </Box>
         <Stack direction="row" justifyContent="center" spacing={5}>
            <Typography variant="h6">Ainda não tem uma conta?</Typography>
            <Button variant="outlined">crie sua conta aqui</Button>
         </Stack>
      </Stack>
   );
}
