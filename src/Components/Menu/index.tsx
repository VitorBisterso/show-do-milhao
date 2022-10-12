import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import logo from 'assets/img/logo.png';

export default function Menu() {
   return (
      <>
         <Stack
            direction="row"
            py={2}
            pl={4}
            sx={{ backgroundColor: 'rgba(25, 118, 210, 0.8)' }}
            alignItems="center"
            spacing={5}
         >
            <Link to="/home">
               <img src={logo} width={150} alt="logo" />
            </Link>
            <Link to="/ranking" style={{ textDecoration: 'none' }}>
               <Typography variant="h6" color="white">
                  placar de líderes
               </Typography>
            </Link>
            <Link to="/quiz" style={{ textDecoration: 'none' }}>
               <Typography variant="h6" color="white">
                  jogar novo quiz
               </Typography>
            </Link>
         </Stack>
         <Stack mx={8} my={4}>
            <Outlet />
         </Stack>
      </>
   );
}
