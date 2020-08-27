import React, { Component } from 'react';
import { Navbar } from './Navbar';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <h1 className="TextLines">Learn about the Enigma Machine, Cryptography and Simulators with Web Encryptor!</h1>
                <hr className="Lines" />
                <h2 className="Description">The <b>Web Encryptor</b> is a project developed to teach about the Enigma machines and cryptography. The project has 7 machines available and 15 ways to use them. Go ahead, enjoy!</h2>
            </div>
        );
    }
}

export { Home };