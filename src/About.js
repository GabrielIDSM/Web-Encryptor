import React, { Component } from 'react';
import { NavbarAbout } from './NavbarAbout';

class About extends Component {
    render() {
        return (
            <div className="AboutDiv">
                <NavbarAbout />
                <div className="AboutMainImgDiv">
                    <div className="AboutMainImgDivContent">
                        <div className="AboutInternalMainImgDiv">
                            <h2>The Web Encryptor is a personal project developed by Gabriel Inácio. All information about the machines was provided by Crypto Museum Website.</h2>
                            <ul>
                                <li><a href="https://github.com/GabrielIDSM">My GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/gabriel-inacio-uff/">My LinkedIn</a></li>
                                <li><a href="https://www.cryptomuseum.com/index.htm">Crypto Museum</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { About };