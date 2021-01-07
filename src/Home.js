import React, { Component } from 'react';
import { Navbar } from './Navbar';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <div className="MainImgDiv">
                    <div className="MainImgDivContent">
                        <h1>Learn about the enigma machine and cryptography with web encryptor!</h1>
                    </div>
                </div>
                <h2>The Web Encryptor is a personal project developed by Gabriel Inácio. The project has 7 machines available and 15 ways to use them. All information about the machines was provided by Crypto Museum Website.</h2>
                <ul className="Home-ul">
                    <li><a href="https://github.com/GabrielIDSM">GitHub</a></li>
                    <li><a href="https://github.com/GabrielIDSM/Web-Encryptor">Project Page</a></li>
                    <li><a href="https://www.cryptomuseum.com/index.htm">Crypto Museum</a></li>
                </ul>
            </div>
        );
    }
}

export { Home };