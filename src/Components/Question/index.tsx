import React from 'react';
import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
} from '@mui/material';

type QuestionProps = {
   answers: Array<string>;
   currentAnswer: string;
   onChange: (value: string) => void;
};

export default function Question({
   answers,
   currentAnswer,
   onChange,
}: QuestionProps) {
   return (
      <FormControl>
         <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue={answers[0]}
            value={currentAnswer}
         >
            {answers.map(answer => (
               <FormControlLabel
                  key={answer}
                  label={answer}
                  value={answer}
                  control={<Radio />}
                  // @ts-expect-error é o tipo correto
                  onChange={e => onChange(e.target.value)}
               />
            ))}
         </RadioGroup>
      </FormControl>
   );
}
