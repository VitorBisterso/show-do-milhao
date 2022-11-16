import { faker } from '@faker-js/faker';

import Question from 'Components/Question';
import { StepType } from 'Components/Wizard';

type UserRanking = {
   id: string;
   user: string;
   category: string;
   score: string;
};

export function mockRankingRow(): UserRanking {
   return {
      id: faker.random.alphaNumeric(16),
      user: faker.name.fullName(),
      category: faker.random.word(),
      score: faker.random.numeric(3),
   };
}

export function mockRanking(rows: number) {
   return Array.from({ length: rows }, () => mockRankingRow());
}

function mockAnswers(amount: number) {
   return Array.from({ length: amount }, () => faker.random.words(2));
}

export function mockQuestion(): StepType {
   const answers = mockAnswers(5);
   return {
      title: faker.random.words(3),
      // eslint-disable-next-line react/react-in-jsx-scope
      element: <Question answers={answers} currentAnswer={answers[0]} />,
   };
}

export function getMockedQuestions(amount: number) {
   return Array.from({ length: amount }, () => mockQuestion());
}
