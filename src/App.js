import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';

import Header from './components/Header/Header';

const App = () => {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/results' component={ResultsPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      	<Route path='/signup' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}


export default App;
