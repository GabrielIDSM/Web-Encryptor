import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Machines from './Machines';
import { EnigmaSwissKCommercial } from './EnigmaSwissKCommercial'
import { EnigmaSwissKAirForce } from './EnigmaSwissKAirForce'
import { EnigmaRailway } from './EnigmaRailway'
import { EnigmaTirpitz } from './EnigmaTirpitz'
import { EnigmaZahlwerkDefault } from './EnigmaZahlwerkDefault'
import { EnigmaZahlwerkG260 } from './EnigmaZahlwerkG260'
import { EnigmaZahlwerkG312 } from './EnigmaZahlwerkG312'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/machines" exact component={ Machines }/>
          <Route path="/enigmaswisskcommercial" exact component={ EnigmaSwissKCommercial }/>
          <Route path="/enigmaswisskairforce" exact component={ EnigmaSwissKAirForce }/>
          <Route path="/enigmarailway" exact component={ EnigmaRailway }/>
          <Route path="/enigmatirpitz" exact component={ EnigmaTirpitz }/>
          <Route path="/enigmazahlwerkdefault" exact component={ EnigmaZahlwerkDefault }/>
          <Route path="/enigmazahlwerkg260" exact component={ EnigmaZahlwerkG260 }/>
          <Route path="/enigmazahlwerkg312" exact component={ EnigmaZahlwerkG312 }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
