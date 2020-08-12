import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
//import List from './pages/List';
import Detect from './pages/Detect';
import NotFound from './pages/NotFound';

export default ({ childProps }) =>
  <Switch>
    <Route path={process.env.PUBLIC_URL+"/"} exact component={Detect} props={childProps} />
    {/* <Route path="/list" exact component={List} props={childProps} /> */}
    <Route path={process.env.PUBLIC_URL+"/about"} exact component={About} props={childProps} />
    <Route component={NotFound} />
  </Switch>;