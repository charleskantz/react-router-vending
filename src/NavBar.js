import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="link">
        <NavLink exact to="/chips">Chips</NavLink>
      </div>
      <div className="link">
        <NavLink exact to="/pizza">Pizza</NavLink>
      </div>
      <div className="link">
        <NavLink exact to="/jaeger">Jaeger</NavLink>
      </div>
    </div>
  )
}

export default NavBar;