import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="MainImgDiv">
                    <div className="MainImgDivContent">
                        <div className="InternalMainImgDiv">
                            <h2>Learn about the enigma machine with web encryptor!</h2>
                            <ul>
                            <Link to="/enigmaone">
                                <li>One</li>
                            </Link>
                            <Link to="/enigmaarmyusem3full">
                                <li>M3 Army</li>
                            </Link>
                            <Link to="/enigmanavyuseseven">
                                <li>M3 Navy</li>
                            </Link>
                            </ul>
                            <ul>
                            <Link to="/enigmam4threerotors">
                                <li>M4</li>
                            </Link>
                            <Link to="/enigmam4ukwd">
                                <li>UKW-D</li>
                            </Link>
                            <Link to="/enigmaswisskairforce">
                                <li>Swiss-K</li>
                            </Link>
                            </ul>
                            <ul>
                            <Link to="/enigmarailway">
                                <li>Railway</li>
                            </Link>
                            <Link to="/enigmatirpitz">
                                <li>Tirpitz</li>
                            </Link>
                            <Link to="/enigmazahlwerkdefault">
                                <li>Zählwerk</li>
                            </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Home };