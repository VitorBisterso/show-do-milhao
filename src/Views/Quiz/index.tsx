import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
   Button,
   CircularProgress,
   Stack,
   TextField,
   Typography,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import {
   useGetCategoriesQuery,
   useGetQuizByCategoryIdMutation,
} from 'Services';
import Wizard from 'Components/Wizard';
import Question from 'Components/Question';

export default function Quiz() {
   const [activeCategory, setActiveCategory] = useState('');

   const { data: categories, isLoading: isLoadingCategories } =
      useGetCategoriesQuery(null);

   const [getQuiz, { data: questions, isLoading: isLoadingQuiz }] =
      useGetQuizByCategoryIdMutation();

   useEffect(() => {
      if (categories && categories.length > 0)
         setActiveCategory(categories[0].id);
   }, [categories]);

   if (isLoadingCategories || isLoadingQuiz)
      return (
         <div style={{ display: 'grid', placeItems: 'center' }}>
            <CircularProgress size={64} />
         </div>
      );

   if (categories && categories.length <= 0)
      return (
         <div style={{ display: 'grid', placeItems: 'center' }}>
            <Typography variant="h6">Nenhuma categoria encontrada</Typography>
         </div>
      );

   const getSteps = () =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      questions!.map(question => ({
         title: question.title,
         element: (
            <Question
               answers={question.answersOptions}
               currentAnswer={question.answersOptions[1]}
            />
         ),
      }));

   const renderQuiz = () =>
      questions &&
      questions.length > 0 && (
         // eslint-disable-next-line no-console
         <Wizard steps={getSteps()} onFinish={() => console.log('terminou')} />
      );

   return (
      <Stack spacing={2}>
         <Typography variant="h6">Selecione a categoria do quiz</Typography>
         <Stack direction="row" spacing={2}>
            <TextField
               value={activeCategory}
               onChange={e => setActiveCategory(e.target.value)}
               select
               label="Categoria"
               style={{ width: '20%' }}
            >
               {categories?.map(category => (
                  <MenuItem key={category.id} value={category.id}>
                     {category.name}
                  </MenuItem>
               ))}
            </TextField>
            <Button
               variant="contained"
               style={{ alignItems: 'center' }}
               onClick={() =>
                  getQuiz(activeCategory)
                     .unwrap()
                     .then(result => {
                        if (result.length <= 0) {
                           toast.error(
                              'Não foram encontradas perguntas para essa categoria...'
                           );
                        }
                     })
               }
            >
               JOGAR
            </Button>
         </Stack>
         {renderQuiz()}
      </Stack>
   );
}
