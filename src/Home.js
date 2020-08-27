import React from 'react';
import './App.css';

function Home() {
    return(
        <div className="Home">
            <p className="TextLines">Welcome to Web Encryptor!</p>
            <hr className="Lines"/>
            <p className="Description">The <b>Web Encryptor</b> is a project developed to teach about the Enigma machines and encryption. The project has 7 machines available and 15 ways to use them. Go ahead, enjoy!</p>
        </div>
    );
}

export default Home;