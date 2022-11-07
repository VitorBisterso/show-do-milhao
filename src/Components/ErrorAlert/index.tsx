import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

type ErrorAlertProps = {
   hasError: boolean;
};

export default function ErrorAlert({ hasError }: ErrorAlertProps) {
   const [isOpen, setIsOpen] = useState(true);

   const handleClose = () => {
      setIsOpen(false);
   };

   return hasError ? (
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
         <Alert severity="error" sx={{ width: '100%' }} onClose={handleClose}>
            Algo deu errado...
         </Alert>
      </Snackbar>
   ) : (
      <div />
   );
}
