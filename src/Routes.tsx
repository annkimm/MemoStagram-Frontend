import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { RootState } from 'store';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Post from 'pages/Post';
import Hashtag from 'pages/Hashtag';

function Routes() {
  const isloggedIn = useSelector((state: RootState) => state.loginReducer.isloggedIn);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={isloggedIn ? Main : Login} />
        <Route exact path="/post/:postId" component={Post} />
        <Route exact path="/hashtag/:tag" component={Hashtag} />
      </Switch>
    </Router>
  );
}

export default Routes;
