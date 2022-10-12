import { faker } from '@faker-js/faker';

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

export function mockQuestion(): StepType {
   return {
      title: faker.random.words(3),
      // eslint-disable-next-line react/react-in-jsx-scope
      element: <p>Olá</p>,
      // eslint-disable-next-line no-console
      onClickNext: () => console.log('respondeu'),
   };
}

export function getMockedQuestions(amount: number) {
   return Array.from({ length: amount }, () => mockQuestion());
}
