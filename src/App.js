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

        {/* <ReviewCard 
          img_url = 'https://a0.muscache.com/im/pictures/b521a92c-26e1-435b-b0b2-e2aa62d28452.jpg?im_w=480'
          ratings = '5'
          review = "Wow where do I start, incredible location, incredible view, incredible studio! Matthias was a fabulous host, made sure we had everything we needed, gave us fantastic recommendations for the locality and gave us a street name for the perfect starting point for our early morning climb to the 'sign'."
          user_name = 'Aidan'
          user_location = 'United Kingdom'
        />

        <ReviewCard 
          img_url = 'https://a0.muscache.com/im/pictures/3444698/c27c406f_original.jpg?im_w=480'
          ratings = '5'
          review = "This place is charming and restful.  Being able to sleep well is really important to me when I'm traveling, and I slept great here.  The bed is comfortable and the neighborhood is quiet.  It's a short walk to South Congress which is also great.  And of course, the chickens outside the front door are the icing on the cake."
          user_name = 'Aidan'
          user_location = 'United Kingdom'
        />

        <ReviewCard 
          img_url = 'https://a0.muscache.com/im/pictures/26475540/b4fd1d09_original.jpg?im_w=480'
          ratings = '5'
          review = 'Thank you so much for opening up your home/backyard for our girls weekend in Austin!  Staying in this groovy airstream enhanced our trip and felt very "Austin-y" - much better than staying at a regular hotel! Highly recommend!'
          user_name = 'Aidan'
          user_location = 'United Kingdom'
        /> */}

      </div>
      
      <div className='ContentSection'>

        {contents}

        {/* <Content 
          img='http://cdn.onlinewebfonts.com/svg/img_35494.png' 
          header='24/7 customer support' 
          text='Day or night, we’re here for you. Talk to our support team from anywhere in the world, any hour of day.'
        />
        <Content 
          img='https://icons.veryicon.com/png/o/miscellaneous/zhiutech-icon/house-34.png' 
          header='Global hosting requirements' 
          text='All hosts must meet hosting requirements and maintain a minimum rating to be on Airbnb.'
        />
        <Content 
          img='https://iconape.com/wp-content/files/pl/10525/png/star.png' 
          header='All-star hosts' 
          text='From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full of local hospitality.'
        /> */}
      </div>

      <h2>Just Booked in United States</h2>

      <div className='JustBookedCardSection'>

        {justBookedCards}

        {/* <JustBookedCard 
          img='https://www.territorysupply.com/wp-content/uploads/2021/01/best-airbnbs-oakland-california.jpg' 
          description='Earth house in Murfreesboro' 
          slogan='The Hobbit House' 
          cost='84'
          review='4.83'
          number_of_reviews='469'
        />
        <JustBookedCard 
          img='https://www.territorysupply.com/wp-content/uploads/2021/01/best-airbnbs-oakland-california.jpg' 
          description='Residential home is Cincinnati' 
          slogan='The Swing House' 
          cost='204'
          review='498'
          number_of_reviews='400'
        />
        <JustBookedCard 
          img='https://www.territorysupply.com/wp-content/uploads/2021/01/best-airbnbs-oakland-california.jpg' 
          description='Treehouse in east Point' 
          slogan='The ATL Treehouse' 
          cost='258'
          review='4.81'
          number_of_reviews='321'
        />
        <JustBookedCard 
          img='https://www.territorysupply.com/wp-content/uploads/2021/01/best-airbnbs-oakland-california.jpg' 
          description='Treehouse in China Grove' 
          slogan='Cherry Treesort "Big Nick"' 
          cost='181'
          review='4.88'
          number_of_reviews='536'
        /> */}
        
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
