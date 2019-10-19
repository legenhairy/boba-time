import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/results' component={ResultsPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}


export default App;
