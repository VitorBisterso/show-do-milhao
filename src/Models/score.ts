type ScoreUser = {
   email: string;
   name: string;
};

type ScoreCategory = {
   name: string;
};

export type Score = {
   id: string;
   score: number;
   user: ScoreUser;
   category: ScoreCategory;
};
