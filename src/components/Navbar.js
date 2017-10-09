import React from 'react';
import {Link} from 'react-router-dom';

import {Menu} from './Menu';

import '../styles/navbar.css';

export const Navbar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/"><span className="glyphicon glyphicon-equalizer"></span> Music Videos</Link>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <Menu/>
      </div>
    </div>
  </nav>
);
