import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="Navbar">
      <p className="Title"><b>Encryptor</b></p>
      <ul className="Navlinks">
        <Link className="links" to="/">
          <li>Home</li>
        </Link>
        <Link className="links" to="/Machines">
          <li>Machines</li>
        </Link>
        <Link className="links" to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;