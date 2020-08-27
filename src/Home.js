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
                    <h2>The Web Encryptor is a personal project developed by Gabriel Inácio. The project has 7 machines available and 15 ways to use them. </h2>
                    <ul>
                        <li><a href="https://github.com/GabrielIDSM">Github Personal Profile</a></li>
                        <li><a href="https://github.com/GabrielIDSM/Web-Encryptor">Project Page</a></li>
                        <li><a href="https://github.com/GabrielIDSM/Web-Encryptor-API">API Project Page</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export { Home };