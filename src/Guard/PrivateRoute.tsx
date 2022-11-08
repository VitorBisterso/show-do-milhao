import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TOKEN_KEY } from 'Const';
import { isUserLoggedIn } from 'Utils';

export default function PrivateRoute() {
   const navigate = useNavigate();

   useEffect(() => {
      const toastId = 'token-toast-error';
      const token = localStorage.getItem(TOKEN_KEY);

      if (!token) {
         toast.error('Você deve logar para ver essa página!', { toastId });
         navigate('/login');
         return;
      }

      if (!isUserLoggedIn()) {
         toast.error('Sessão expirada! Faça login novamente', { toastId });
         navigate('/login');
      }
   });

   return <Outlet />;
}
