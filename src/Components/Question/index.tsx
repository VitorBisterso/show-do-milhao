import React from 'react';
import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
} from '@mui/material';

type QuestionProps = {
   answers: Array<string>;
};

export default function Question({ answers }: QuestionProps) {
   return (
      <FormControl>
         <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue={answers[0]}
         >
            {answers.map(answer => (
               <FormControlLabel
                  key={answer}
                  label={answer}
                  value={answer}
                  control={<Radio />}
               />
            ))}
         </RadioGroup>
      </FormControl>
   );
}
