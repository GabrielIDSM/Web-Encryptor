import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Machines() {
    return(
        <div className="Machines">
            <ul>
                <li className="MachinesListUnique">Enigma 1</li>
                <hr className="Lines"/>
                <li className="MachinesList">Enigma M3</li>
                <hr className="Lines"/>
                <ul>
                    <li className="MachinesSublist">Army-use with 6 plugs</li>
                    <li className="MachinesSublist">Army-use with full plugboard</li>
                    <li className="MachinesSublist">Navy-use with 7 rotors available</li>
                    <li className="MachinesSublist">Navy-use with 8 rotors available</li>
                </ul>
                <li className="MachinesList">Enigma M4</li>
                <hr className="Lines"/>
                <ul>
                    <li className="MachinesSublist">3 rotors operation</li>
                    <li className="MachinesSublist">4 rotors operation</li>
                    <li className="MachinesSublist">Plugboard and UKW-D</li>
                </ul>
                <li className="MachinesList">Enigma Swiss-K</li>
                <hr className="Lines"/>
                <ul>
                    <Link to="/enigmaswisskairforce">
                        <li className="MachinesSublist">Air Force</li>
                    </Link>
                    <Link to="/enigmaswisskcommercial">
                        <li className="MachinesSublist">Commercial</li>
                    </Link>
                </ul>
                <Link to="/enigmarailway">
                    <li className="MachinesListUnique">Enigma Railway</li>
                </Link>
                <hr className="Lines"/>
                <Link to="/enigmatirpitz">
                    <li className="MachinesListUnique">Enigma Tirpitz</li>
                </Link>
                <hr className="Lines"/>
                <li className="MachinesList">Enigma Zahlwerk</li>
                <hr className="Lines"/>
                <ul>
                    <Link to="/enigmazahlwerkdefault">
                        <li className="MachinesSublist">Default</li>
                    </Link>
                    <Link to="/enigmazahlwerkg312">
                        <li className="MachinesSublist">G312</li>
                    </Link>
                    <Link to="/enigmazahlwerkg260">
                        <li className="MachinesSublist">G260</li>
                    </Link>
                </ul>
            </ul>
        </div>
    );
}

export default Machines;