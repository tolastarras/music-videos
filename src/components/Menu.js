import React from 'react';
import {Link} from 'react-router-dom';

export const Menu = () => {
  return (
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );
}
