import { ThemeProvider } from '@mui/material';
import React from 'react';
import { GlobalStyle } from './GlobalStyled';
import Theme from './constants/theme';
import Router from './routes/router'


 function App() {
  return (
    <ThemeProvider theme={Theme}>
        
          <Router/>
          <GlobalStyle/>
    </ThemeProvider>
  
  );
}

export default App;
