import React from 'react';
import './App.css';

function NavBar() {
  return (
    <nav className="Navbar">
      <p className="Title"><b>Encryptor</b></p>
      <ul className="Navlinks">
        <li>Home</li>
        <li>Machines</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default NavBar;