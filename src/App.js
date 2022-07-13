import './App.css';
import { routeitems } from "./data/routeData.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import './assets/js/scrollOnClick.asset'
import Navigation from './components/navigation/navigation';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="App">
      <Navigation setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        <Router>
          <Switch>
              {routeitems.map((item) => (
                <Route exact path={item.route} key={item.component}>
                  {item.component}
                </Route>
              ))}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
