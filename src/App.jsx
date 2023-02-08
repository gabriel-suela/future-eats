import { ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './constants/theme';
import { GlobalStyle } from './GlobalStyled';
//import theme from './constants/theme';
import Router from './routes/router'


 function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <Router/>
          
    </ThemeProvider>
  
  );
}

export default App;
