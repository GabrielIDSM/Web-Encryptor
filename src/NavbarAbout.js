import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarAbout extends Component {
  render() {
  return (
    <nav className="Navbar">
      <ul className="Navlinks">
        <Link className="links" to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
  }
}

export { NavbarAbout };