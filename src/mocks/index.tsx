import { faker } from '@faker-js/faker';

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
