import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login'
import CreatePublication from './pages/CreatePublication'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/createpublication" component={CreatePublication} />
      </Switch>
    </BrowserRouter>
  )
}