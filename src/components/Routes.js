import React from 'react';
import {Route, Switch} from 'react-router-dom';

// components
import Home from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
// import {NotFound} from './NotFound';

export const Routes = () => (
  <div className="container main-content">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </div>
);
