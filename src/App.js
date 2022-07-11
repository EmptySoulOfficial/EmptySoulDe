import './App.css';

import Header from './components/content/header/header'
import ScrollBar from './components/content/scrollBar/scrollBar.jsx'

function App() {
  return (
    <>
    <div className="App">
      <ScrollBar />
      <Header/>
    </div>
    </>
  );
}

export default App;
