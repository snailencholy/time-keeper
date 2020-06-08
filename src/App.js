import React from 'react';
import {ThemeProvider} from '@material-ui/styles'
import Hoursform from './components/Form';
import theme from './components/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <Hoursform/>
    </ThemeProvider>
  );
}

export default App;
