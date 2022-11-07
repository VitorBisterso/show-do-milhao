import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import logo from 'Assets/img/logo.png';
import { LogoutOutlined } from '@mui/icons-material';

export default function Menu() {
   return (
      <>
         <Stack
            direction={{ sm: 'column', md: 'row' }}
            py={2}
            px={4}
            sx={{ backgroundColor: 'rgba(25, 118, 210, 0.8)' }}
            alignItems="center"
         >
            <Link to="/home">
               <img src={logo} width={150} alt="logo" />
            </Link>
            <Stack
               ml={4}
               flex={1}
               direction="row"
               justifyContent="space-between"
               spacing={4}
            >
               <Stack direction="row" alignItems="center" spacing={4}>
                  <Link to="/ranking" style={{ textDecoration: 'none' }}>
                     <Typography variant="h6" color="white">
                        RANKING
                     </Typography>
                  </Link>
                  <Link to="/quiz" style={{ textDecoration: 'none' }}>
                     <Typography variant="h6" color="white">
                        JOGAR
                     </Typography>
                  </Link>
               </Stack>

               <Stack direction="row" alignItems="center" spacing={4}>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                     <Typography variant="h6" color="white">
                        ENTRAR
                     </Typography>
                  </Link>
                  <Link
                     to="/logout"
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textDecoration: 'none',
                     }}
                  >
                     <LogoutOutlined style={{ color: 'white' }} />
                     <Typography variant="h6" color="white">
                        SAIR
                     </Typography>
                  </Link>
               </Stack>
            </Stack>
         </Stack>
         <Stack mx={8} my={4}>
            <Outlet />
         </Stack>
      </>
   );
}
