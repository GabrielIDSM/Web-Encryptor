import React, { Component } from 'react';
import './App.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
  return (
    <nav className="Navbar">
      <p className="Title"><b>Web Encryptor</b></p>
      <ul className="Navlinks">
        <Link className="links" to="/">
          <li>Home</li>
        </Link>
        <div className="links">
          <li><label>Machines</label>
            <ul>
              <Link to="/enigmaone">
                <li className="MachinesListUnique">One</li>
              </Link>
              <Link to="/enigmaarmyusem3sixplugs">
                <li className="MachinesSublist">M3 Army-use - 6 plugs</li>
              </Link>
              <Link to="/enigmaarmyusem3full">
                <li className="MachinesSublist">M3 Army-use</li>
              </Link>
              <Link to="/enigmanavyuseseven">
                <li className="MachinesSublist">M3 Navy-use - 7 rotors</li>
              </Link>
              <Link to="/enigmanavyuseeight">
                <li className="MachinesSublist">M3 Navy-use - 8 rotors</li>
              </Link>
              <Link to="/enigmam4threerotors">
                <li className="MachinesSublist">M4 - 3 rotors operation</li>
              </Link>
              <Link to="/enigmam4fourrotors">
                <li className="MachinesSublist">M4 - 4 rotors operation</li>
              </Link>
              <Link to="/enigmam4ukwd">
                <li className="MachinesSublist">M4 - UKW-D</li>
              </Link>
              <Link to="/enigmaswisskairforce">
                <li className="MachinesSublist">Swiss-K - Air Force</li>
              </Link>
              <Link to="/enigmaswisskcommercial">
                <li className="MachinesSublist">Swiss-K - Commercial</li>
              </Link>
              <Link to="/enigmarailway">
                <li className="MachinesListUnique">Railway</li>
              </Link>
              <Link to="/enigmatirpitz">
                <li className="MachinesListUnique">Tirpitz</li>
              </Link>
              <Link to="/enigmazahlwerkdefault">
                <li className="MachinesSublist">Zählwerk</li>
              </Link>
              <Link to="/enigmazahlwerkg312">
                <li className="MachinesSublist">Zählwerk - G312</li>
              </Link>
              <Link to="/enigmazahlwerkg260">
                <li className="MachinesSublist">Zählwerk - G260</li>
              </Link>
            </ul>
          </li>
        </div>
      </ul>
    </nav>
  );
  }
}

export { Navbar };