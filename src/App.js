import React from 'react';
import './App.css';
import { Home } from './Home';
import { EnigmaSwissKCommercial } from './EnigmaSwissKCommercial'
import { EnigmaSwissKAirForce } from './EnigmaSwissKAirForce'
import { EnigmaRailway } from './EnigmaRailway'
import { EnigmaTirpitz } from './EnigmaTirpitz'
import { EnigmaZahlwerkDefault } from './EnigmaZahlwerkDefault'
import { EnigmaZahlwerkG260 } from './EnigmaZahlwerkG260'
import { EnigmaZahlwerkG312 } from './EnigmaZahlwerkG312'
import { EnigmaOne } from './EnigmaOne'
import { EnigmaM3SixPlugs } from './EnigmaM3SixPlugs'
import { EnigmaM3ArmyUse } from './EnigmaM3ArmyUse'
import { EnigmaM3NavyUseSevenRotors } from './EnigmaM3NavyUseSevenRotors'
import { EnigmaM3NavyUseEightRotors } from './EnigmaM3NavyUseEightRotors'
import { EnigmaM4ThreeRotors } from './EnigmaM4ThreeRotors'
import { EnigmaM4FourRotors } from './EnigmaM4FourRotors'
import { EnigmaM4UKWD } from './EnigmaM4UKWD'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/enigmaswisskcommercial" exact component={ EnigmaSwissKCommercial }/>
          <Route path="/enigmaswisskairforce" exact component={ EnigmaSwissKAirForce }/>
          <Route path="/enigmarailway" exact component={ EnigmaRailway }/>
          <Route path="/enigmatirpitz" exact component={ EnigmaTirpitz }/>
          <Route path="/enigmazahlwerkdefault" exact component={ EnigmaZahlwerkDefault }/>
          <Route path="/enigmazahlwerkg260" exact component={ EnigmaZahlwerkG260 }/>
          <Route path="/enigmazahlwerkg312" exact component={ EnigmaZahlwerkG312 }/>
          <Route path="/enigmaone" exact component={ EnigmaOne }/>
          <Route path="/enigmaarmyusem3sixplugs" exact component={ EnigmaM3SixPlugs }/>
          <Route path="/enigmaarmyusem3full" exact component={ EnigmaM3ArmyUse }/>
          <Route path="/enigmanavyuseseven" exact component={ EnigmaM3NavyUseSevenRotors }/>
          <Route path="/enigmanavyuseeight" exact component={ EnigmaM3NavyUseEightRotors }/>
          <Route path="/enigmam4threerotors" exact component={ EnigmaM4ThreeRotors }/>
          <Route path="/enigmam4fourrotors" exact component={ EnigmaM4FourRotors }/>
          <Route path="/enigmam4ukwd" exact component={ EnigmaM4UKWD }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
