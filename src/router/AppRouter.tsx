import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Experience } from '../pages/Experience';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
      <Route path="/home" component={Home} />
      <Route path="">
            <Redirect to="/home" />
      </Route>
    </Switch>
  );
};
