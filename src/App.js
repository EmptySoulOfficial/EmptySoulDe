import './App.css';
import { routeitems } from "./data/routeData.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import './assets/js/scrollOnClick.asset'
import Navigation from './components/navigation/navigation';
import Menu from './components/content/menu/menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="App">
        <div className="App-container">
        <Navigation setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
          <Router setMenuOpen={setMenuOpen} menuOpen={menuOpen}>
            <Switch>
                {routeitems.map((item) => (
                  <Route exact path={item.route} key={item.component}>
                    {item.component({menuOpen,setMenuOpen})}
                  </Route>
                ))}
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
