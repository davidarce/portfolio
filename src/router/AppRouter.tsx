import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
