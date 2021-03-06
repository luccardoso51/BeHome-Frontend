import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import CreatePublication from './pages/CreatePublication';
import Feed from './pages/Feed';
import MyPublications from './pages/MyPublications';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/createpublication" component={CreatePublication} />
        <Route path="/feed" component={Feed} />
        <Route path="/mypublications" component={MyPublications} />
      </Switch>
    </BrowserRouter>
  )
}