import { ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './constants/theme';
//import theme from './constants/theme';
import Router from './routes/router'


 function App() {
  return (
    <ThemeProvider theme={theme}>
          <Router/>
    </ThemeProvider>
  
  );
}

export default App;
