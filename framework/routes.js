import Demo from 'modules/Demo';
import React from 'react';
import { IndexRoute, Route } from 'react-router';

export default (
  <Route path="/" >
    <IndexRoute components={Demo} />
  </Route>
);
