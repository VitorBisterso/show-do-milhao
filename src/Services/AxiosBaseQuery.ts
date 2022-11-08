import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';

import { TOKEN_KEY } from 'Const';

// eslint-disable-next-line import/prefer-default-export
export const AxiosBaseQuery =
   (
      { baseUrl }: { baseUrl: string } = { baseUrl: '' }
   ): BaseQueryFn<
      {
         url: string;
         method: AxiosRequestConfig['method'];
         data?: AxiosRequestConfig['data'];
         params?: AxiosRequestConfig['params'];
      },
      unknown,
      unknown
   > =>
   async ({ url, method, data, params }) => {
      const token = localStorage.getItem(TOKEN_KEY);
      try {
         const result = await axios({
            url: `${baseUrl}${url}`,
            method,
            headers: {
               Authorization: `Bearer ${token}`,
            },
            data,
            params,
         });
         return { data: result };
      } catch (axiosError) {
         const err = axiosError as AxiosError;
         return {
            error: {
               status: err.response?.status,
               data: err.response?.data || err.message,
            },
         };
      }
   };
