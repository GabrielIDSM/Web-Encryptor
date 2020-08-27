import React, { Component } from 'react';
import { Navbar } from './Navbar';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <p className="TextLines">Welcome to Web Encryptor!</p>
                <hr className="Lines" />
                <p className="Description">The <b>Web Encryptor</b> is a project developed to teach about the Enigma machines and encryption. The project has 7 machines available and 15 ways to use them. Go ahead, enjoy!</p>
            </div>
        );
    }
}

export { Home };