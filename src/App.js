import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import theme from './components/Theme';
import Login from './components/Login';
import Signup from './components/Signup';
import Hours from './components/Hours';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/hours" component={Hours}/>
          </Switch>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
