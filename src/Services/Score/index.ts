import { AxiosResponse } from 'axios';

import { Score } from 'Models/score';
import { api } from '../Api';

type SubmitScoreParams = {
   userEmail: string;
   categoryId: string;
   score: number;
};

export const scoreApi = api.injectEndpoints({
   endpoints: builder => ({
      submitScore: builder.mutation<null, SubmitScoreParams>({
         query: data => ({
            url: '/scores',
            method: 'POST',
            data,
         }),
      }),
      getScores: builder.query<Array<Score>, null>({
         query: data => ({
            url: '/scores/rank',
            method: 'GET',
            data,
         }),
         transformResponse(apiResponse: AxiosResponse) {
            return apiResponse.data.scores as Array<Score>;
         },
      }),
   }),
});

export const { useSubmitScoreMutation, useGetScoresQuery } = scoreApi;
