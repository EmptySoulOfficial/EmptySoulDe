import './App.css';
import './assets/js/scrollOnClick.asset'
import Header from './components/content/header/header'
import DemoContent from './components/content/demoContent/demoContent.jsx'

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div className="mainEntity">
        <DemoContent />
      </div>
    </div>
    </>
  );
}

export default App;
