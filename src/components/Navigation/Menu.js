import React from 'react';
import {Link} from 'react-router-dom';

export const Menu = () => (
  <ul className="nav navbar-nav">
    <li className="active"><Link to="/projects/music-videos/">Home</Link></li>
    <li><Link to="/projects/music-videos/about">About</Link></li>
    <li><Link to="/projects/music-videos/contact">Contact</Link></li>
  </ul>
);

export const Logo = () => (
  <Link className="navbar-brand" to="/projects/music-videos/"><span className="glyphicon glyphicon-equalizer"></span> Music Videos</Link>
);
