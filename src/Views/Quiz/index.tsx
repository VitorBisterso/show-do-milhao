import React from 'react';

import Wizard from 'Components/Wizard';
import { getMockedQuestions } from 'mocks';

export default function Quiz() {
   const steps = getMockedQuestions(5);
   // eslint-disable-next-line no-console
   return <Wizard steps={steps} onFinish={() => console.log('terminou')} />;
}
