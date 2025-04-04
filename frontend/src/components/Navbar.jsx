import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Silver Creek Equestrian</h2>
      </div>
      <div className="navbar-links">
        <a href="#programs">Programs</a>
        <a href="#dates">Dates</a>
        <a href="#what-to-bring">What to Bring</a>
      </div>
    </nav>
  );
}

export default Navbar;