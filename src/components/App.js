import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// components
import {Navbar} from './Navbar';
import {Routes} from './Routes';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Routes/>
          </div>
        </Router>
      </div>
    );
  }
}
