import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { blue, purple } from '@mui/material/colors';

import AppRoutes from 'Routes';

const theme = createTheme({
   palette: {
      primary: {
         main: blue[700],
      },
      secondary: {
         main: purple[500],
      },
   },
});

function App() {
   return (
      <ThemeProvider theme={theme}>
         <AppRoutes />
      </ThemeProvider>
   );
}

export default App;
