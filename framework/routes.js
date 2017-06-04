import Demo from 'modules/Demo';
import Homepage from 'modules/Homepage';
import React from 'react';
import { IndexRoute, Route } from 'react-router';

export default (
  <Route path="/">
    <IndexRoute components={Demo} />
    <Route path="/homepage" component={Homepage} />
  </Route>
);
