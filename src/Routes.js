import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Detect from './pages/Detect';
import NotFound from './pages/NotFound';

export default ({ childProps }) =>
  <Switch>
    {/* <Route path="/" exact component={Detect} props={childProps} /> */}
    <Route path="/about" exact component={About} props={childProps} />
    <Route component={NotFound} />
  </Switch>;