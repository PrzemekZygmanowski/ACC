import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles.scss';
import { Header, NotFound, NewProject } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        {' '}
        <Route path='/signUp' component={NotFound} />
        <Route path='/logIn' component={NotFound} />
        <Route path='/newProject' component={NewProject} />
        <Route path='/' component={Header} />
      </Switch>
    </Router>
  );
}
