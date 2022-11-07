import { api } from '../Api';

type RegisterParams = {
   name: string;
   email: string;
   password: string;
};

export const userApi = api.injectEndpoints({
   endpoints: builder => ({
      register: builder.mutation<string, RegisterParams>({
         query: data => ({
            url: '/users/register',
            method: 'POST',
            data,
         }),
      }),
   }),
});

export const { useRegisterMutation } = userApi;
