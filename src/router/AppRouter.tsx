import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/home" component={Home} />
      <Route path="">
            <Redirect to="/home" />
      </Route>
    </Switch>
  );
};
