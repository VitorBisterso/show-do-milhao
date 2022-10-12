import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '@/Views/Home';

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}
