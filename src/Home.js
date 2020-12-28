import React, { Component } from 'react';
import { Navbar } from './Navbar';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <img className="MainImg" alt="Enigma Machine" src={require('./images/home.png')}></img>
                <div className="Title-Div">
                    <h1>Learn about the enigma machine and cryptography with web encryptor!</h1>
                    <h2>The Web Encryptor is a personal project developed by Gabriel Inácio. The project has 7 machines available and 15 ways to use them. All information about the machines was provided by Crypto Museum Website.</h2>
                </div>
            </div>
        );
    }
}

export { Home };