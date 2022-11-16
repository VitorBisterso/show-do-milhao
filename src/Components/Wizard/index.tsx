/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, StepContent } from '@mui/material';

export type StepType = {
   title: string;
   element: ReactNode;
};

type WizardProps = {
   steps: Array<StepType>;
   onFinish: () => void;
};

export default function Wizard({ steps, onFinish }: WizardProps) {
   const [activeStep, setActiveStep] = useState(0);

   const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
   };

   return (
      <Box sx={{ maxWidth: 400 }}>
         <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
               <Step key={step.title}>
                  <StepLabel>{step.title}</StepLabel>
                  <StepContent>
                     {step.element}
                     <Box sx={{ mb: 2 }}>
                        <div>
                           <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                           >
                              {index === steps.length - 1
                                 ? 'Terminar'
                                 : 'Próxima'}
                           </Button>
                           <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                           >
                              Voltar
                           </Button>
                        </div>
                     </Box>
                  </StepContent>
               </Step>
            ))}
         </Stepper>
         {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
               <Typography variant="body1">Concluído!</Typography>
               <Button onClick={onFinish} sx={{ mt: 1, mr: 1 }}>
                  Resetar
               </Button>
            </Paper>
         )}
      </Box>
   );
}
