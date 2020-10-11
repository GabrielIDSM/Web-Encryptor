import React, { Component } from 'react';
import { Navbar } from './Navbar';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <div className="MainDivHome">
                    <h1>Learn about the enigma machine and cryptography with web encryptor!</h1>
                    <h2>The Web Encryptor is a personal project developed by Gabriel Inácio. The project has 7 machines available and 15 ways to use them. Wait a few seconds after clicking the submit button. All information about the machines was provided by Crypto Museum Website.</h2>
                    <ul>
                        <li><a href="https://github.com/GabrielIDSM">Github Personal Profile</a></li>
                        <li><a href="https://github.com/GabrielIDSM/Web-Encryptor">Project Page</a></li>
                        <li><a href="https://www.cryptomuseum.com/index.htm">Crypto Museum Website</a></li>
                    </ul>
                </div>
                <div className="InstructionsDivHome">
                    <h2>Rules</h2>
                    <hr/>
                    <ul>
                        <li>Do not use the same rotor more than once;</li>
                        <li>Do not use the same letter more than once on Plugboard;</li>
                        <li>Do not use the same letter more than once on UKW-D;</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export { Home };