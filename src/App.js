import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import CallToActionCard from './components/CallToActionCard/CallToActionCard.js'
import TryHostingCard from './components/TryHostingCard/TryHostingCard.js'
import ReviewCard from './components/ReviewCard/ReviewCard.js'

// import TryHostingCard from '../components/TryHostingCard/TryHostingCard.js'


// Cloning this: https://www.airbnb.com/a/stays/?ghost=true&c=.pi0.pk15998387001_135672839914&ghost=true&gclid=Cj0KCQiAr5iQBhCsARIsAPcwRON-JIiLxFDHZiXc1Y5y6YE4aLy5oqAZqNhT2M4s4dVG7hC0z0tjBp4aAhWmEALw_wcB

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToActionCard />
      <TryHostingCard />
      <h2>What guests are saying about homes in United States</h2>
      <p>Over 72,500,000 guest reviews with an average of 4.8 out of 5 stars</p>

      <div className='reviewSection'>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      



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
