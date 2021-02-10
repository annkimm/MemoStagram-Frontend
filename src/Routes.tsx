import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { RootState } from './store';
import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
  const isloggedIn = useSelector((state: RootState) => state.loginReducer.isloggedIn);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={isloggedIn ? Main : Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
