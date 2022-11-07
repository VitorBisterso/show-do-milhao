import axios from 'axios';

import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';

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
      try {
         const result = await axios({
            url: `${baseUrl}${url}`,
            method,
            data,
            params,
         });
         return { data: result.data };
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
