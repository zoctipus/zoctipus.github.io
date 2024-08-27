import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/art">Art</Link></li>
        <li><Link to="/octilab">Octi Lab</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
