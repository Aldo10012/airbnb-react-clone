import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar.js'
import CallToActionCard from './components/CallToActionCard/CallToActionCard.js'
import TryHostingCard from './components/TryHostingCard/TryHostingCard.js'
import ReviewCard from './components/ReviewCard/ReviewCard.js'
import Content from './components/Content/Content.js'
import JustBookedCard from './components/JustBookedCard/JustBookedCard.js'

// Data
import reviewCard_data from './data/ReviewCard-data.json'
import content_data from './data/Content-data.json'
import justBooked_data from './data/JustBookedCard.json'

// Cloning this: https://www.airbnb.com/a/stays/?ghost=true&c=.pi0.pk15998387001_135672839914&ghost=true&gclid=Cj0KCQiAr5iQBhCsARIsAPcwRON-JIiLxFDHZiXc1Y5y6YE4aLy5oqAZqNhT2M4s4dVG7hC0z0tjBp4aAhWmEALw_wcB

function App() {

  const reviewCard = reviewCard_data.map((obj) => {
    return  <ReviewCard 
      img_url = {obj.img_url} 
      ratings = {obj.ratings} 
      review = {obj.review} 
      user_name = {obj.user_name} 
      user_location = {obj.user_location} 
    />
  })

  const contents = content_data.map(obj => {
    return <Content 
      img = {obj.img} 
      header = {obj.header} 
      text = {obj.text}
    />
  })

  const justBookedCards = justBooked_data.map(obj => {
    return <JustBookedCard 
      img = {obj.img} 
      description = {obj.description} 
      slogan = {obj.slogan} 
      cost = {obj.cost} 
      review = {obj.review} 
      number_of_reviews = {obj.number_of_reviews} 
    />
  })


  return (
    <div className="App">
      <Navbar />
      <CallToActionCard />
      <TryHostingCard />
      <h2>What guests are saying about homes in United States</h2>
      <p>Over 72,500,000 guest reviews with an average of 4.8 out of 5 stars</p>

      <div className='reviewSection'>
        {reviewCard}
      </div>
      
      <div className='ContentSection'>
        {contents}
      </div>

      <h2>Just Booked in United States</h2>

      <div className='JustBookedCardSection'>
        {justBookedCards}
      </div>
      
    </div>
  );
}

export default App;
