import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Menu from 'Components/Menu';
import Home from 'Views/Home';
import LoginForm from 'Views/Login';
import SignUpForm from 'Views/SignUp';
import Ranking from 'Views/Ranking';
import PageNotFound from 'Views/PageNotFound';

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Menu />}>
               <Route path="/" element={<Navigate replace to="home" />} />
               <Route path="home" element={<Home />} />
               <Route path="login" element={<LoginForm />} />
               <Route path="signup" element={<SignUpForm />} />
               <Route path="ranking" element={<Ranking />} />
               <Route path="quiz" element={<Ranking />} />

               <Route path="*" element={<PageNotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
