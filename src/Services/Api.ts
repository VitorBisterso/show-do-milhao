import { createApi } from '@reduxjs/toolkit/query/react';

import env from 'env.json';
import { AxiosBaseQuery } from './AxiosBaseQuery';

const baseQuery = AxiosBaseQuery({
   baseUrl: env.BASE_URL,
});

// eslint-disable-next-line import/prefer-default-export
export const api = createApi({
   reducerPath: 'show-do-milhao',
   baseQuery,
   tagTypes: [],
   endpoints: () => ({}),
});
