import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './components/Theme';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Hours from './components/Hours';


const authState = {
  isAuthenticated: false,
}

function App() {

  const [state, updateState] = React.useState(authState)

  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Switch >
            <Route exact path="/" component={Hours}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
