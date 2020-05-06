import React from 'react';
import Header from '../components/ui/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'

function App() {
  return (
    //https://material-ui.com/customization/theming/
    <ThemeProvider theme={theme}>
      <Header/>
      Hello
    </ThemeProvider>

  );
}

export default App;
