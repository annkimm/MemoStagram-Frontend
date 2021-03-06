import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { RootState } from 'store';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Post from 'pages/Post';
import Comments from 'pages/Comments';
import User from 'pages/User';
import Hashtag from 'pages/Hashtag';
import Location from 'pages/Location';
import CreateImage from 'pages/CreateImage';
import CreateLocation from 'pages/CreateLocation';
import CreatePost from 'pages/CreatePost';

function Routes() {
  const isloggedIn = useSelector((state: RootState) => state.loginReducer.isloggedIn);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={isloggedIn ? Main : Login} />
        <Route exact path="/post/:postId" component={Post} />
        <Route exact path="/comments/:postId" component={Comments} />
        <Route exact path="/hashtag/:tag" component={Hashtag} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/create/image" component={CreateImage} />
        <Route exact path="/create/location" component={CreateLocation} />
        <Route exact path="/location/:address" component={Location} />
        <Route exact path="/create/post" component={CreatePost} />
      </Switch>
    </Router>
  );
}

export default Routes;
