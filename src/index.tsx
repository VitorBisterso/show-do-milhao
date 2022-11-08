import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { setupStore } from 'Store';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <ToastContainer />
      <Provider store={setupStore()}>
         <App />
      </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
