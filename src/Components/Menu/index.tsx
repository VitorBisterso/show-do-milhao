import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

import logo from 'Assets/img/logo.png';
import { isUserLoggedIn, logout } from 'Utils';

export default function Menu() {
   const navigate = useNavigate();
   const isLoggedIn = isUserLoggedIn();

   const renderLoggedInfo = () => (
      <Stack direction="row" alignItems="center" spacing={4}>
         {isLoggedIn ? (
            <Button
               style={{ alignItems: 'center' }}
               onClick={() => {
                  logout();
                  navigate('/login');
               }}
            >
               <Typography variant="h6" color="white">
                  SAIR
               </Typography>
               <LogoutOutlined style={{ color: 'white' }} />
            </Button>
         ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
               <Typography variant="h6" color="white">
                  ENTRAR
               </Typography>
            </Link>
         )}
      </Stack>
   );

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

               {renderLoggedInfo()}
            </Stack>
         </Stack>
         <Stack mx={8} my={4}>
            <Outlet />
         </Stack>
      </>
   );
}
