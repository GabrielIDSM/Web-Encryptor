import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Machines from './Machines';
import { EnigmaSwissKCommercial } from './EnigmaSwissKCommercial'
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
