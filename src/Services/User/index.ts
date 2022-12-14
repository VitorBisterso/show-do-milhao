import { AxiosResponse } from 'axios';
import { api } from '../Api';

type RegisterParams = {
   name: string;
   email: string;
   password: string;
};

type LoginParams = {
   email: string;
   password: string;
};

export const userApi = api.injectEndpoints({
   endpoints: builder => ({
      register: builder.mutation<null, RegisterParams>({
         query: data => ({
            url: '/users/register',
            method: 'POST',
            data,
         }),
      }),
      login: builder.mutation<string, LoginParams>({
         query: data => ({
            url: '/users/login',
            method: 'POST',
            data,
         }),
         transformResponse(apiResponse: AxiosResponse) {
            return apiResponse.data.token as string;
         },
      }),
   }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
