import { ThemeProvider } from '@mui/material';
import React from 'react';
import { GlobalStyle } from './GlobalStyled';
import Theme from './constants/theme';
import Router from './routes/router'
import GlobalState from './context/GlobalState'


 function App() {
  return (
    <ThemeProvider theme={Theme}>
          <GlobalState>
          <Router/>
          </GlobalState>
          <GlobalStyle/>
    </ThemeProvider>
  
  );
}

export default App;
