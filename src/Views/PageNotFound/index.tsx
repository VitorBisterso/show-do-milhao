import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function PageNotFound() {
   return (
      <Stack mt={16} textAlign="center" spacing={4}>
         <Typography variant="h3">404</Typography>
         <Typography variant="h5">
            Opa! Esta página não pode ser encontrada
         </Typography>
      </Stack>
   );
}
