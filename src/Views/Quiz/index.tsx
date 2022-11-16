import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
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
   useSubmitScoreMutation,
} from 'Services';
import Wizard from 'Components/Wizard';
import Question from 'Components/Question';
import { getCurrentUserEmail } from 'Utils';

export default function Quiz() {
   const navigate = useNavigate();

   const [activeCategory, setActiveCategory] = useState('');
   const [selectedAnswers, setSelectedAnswers] = useState([] as Array<string>);

   const { data: categories, isLoading: isLoadingCategories } =
      useGetCategoriesQuery(null);

   const [getQuiz, { data: questions, isLoading: isLoadingQuiz }] =
      useGetQuizByCategoryIdMutation();

   const [submitScore, { isLoading: isSubmitting }] = useSubmitScoreMutation();

   useEffect(() => {
      if (categories && categories.length > 0)
         setActiveCategory(categories[0].id);
   }, [categories]);

   if (isLoadingCategories || isLoadingQuiz || isSubmitting)
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

   const handleQuestionAnswerChange = (value: string, index: number) => {
      const newAnswers = [...selectedAnswers];
      newAnswers[index] = value;

      setSelectedAnswers(newAnswers);
   };

   const getSteps = () =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      questions!.map((question, index) => ({
         title: question.title,
         element: (
            <Question
               answers={question.answersOptions}
               currentAnswer={selectedAnswers[index]}
               onChange={value => handleQuestionAnswerChange(value, index)}
            />
         ),
      }));

   const getScore = () => {
      let score = 0;
      questions?.forEach((question, index) => {
         if (question.correctAnswer === selectedAnswers[index]) score += 1;
      });

      return score;
   };

   const renderQuiz = () =>
      questions &&
      questions.length > 0 && (
         // eslint-disable-next-line no-console
         <Wizard
            steps={getSteps()}
            onFinish={() => {
               const score = getScore();
               const userEmail = getCurrentUserEmail();

               submitScore({ score, userEmail, categoryId: activeCategory })
                  .unwrap()
                  .then(() => {
                     toast.success('Pontuação submetida com sucesso!');
                     navigate('/ranking');
                  });
            }}
         />
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

                        setSelectedAnswers(
                           result.map(question => question.answersOptions[0])
                        );
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
