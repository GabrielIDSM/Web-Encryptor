import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Machines from './Machines';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/Machines" exact component={ Machines }/>
          <Route path="/About" exact component={ About }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
