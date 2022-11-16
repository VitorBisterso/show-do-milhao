import { AxiosResponse } from 'axios';

import { Category } from 'Models/category';
import { Question } from 'Models/quiz';
import { api } from '../Api';

export const quizApi = api.injectEndpoints({
   endpoints: builder => ({
      getCategories: builder.query<Array<Category>, null>({
         query: data => ({
            url: '/categories',
            method: 'GET',
            data,
         }),
         transformResponse(apiResponse: AxiosResponse) {
            return apiResponse.data.categories as Array<Category>;
         },
      }),
      getQuizByCategoryId: builder.mutation<Array<Question>, string>({
         query: categoryId => ({
            url: `/questions/quiz/${categoryId}`,
            method: 'GET',
         }),
         transformResponse(apiResponse: AxiosResponse) {
            return apiResponse.data.questions as Array<Question>;
         },
      }),
   }),
});

export const { useGetCategoriesQuery, useGetQuizByCategoryIdMutation } =
   quizApi;
