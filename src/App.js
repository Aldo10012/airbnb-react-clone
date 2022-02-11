import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'

// Cloning this: https://www.airbnb.com/a/stays/?ghost=true&c=.pi0.pk15998387001_135672839914&ghost=true&gclid=Cj0KCQiAr5iQBhCsARIsAPcwRON-JIiLxFDHZiXc1Y5y6YE4aLy5oqAZqNhT2M4s4dVG7hC0z0tjBp4aAhWmEALw_wcB

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
