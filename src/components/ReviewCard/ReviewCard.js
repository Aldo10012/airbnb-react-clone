import './ReviewCard.css'

const starImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png'
const REVIEW = "Wow where do I start, incredible location, incredible view, incredible studio! Matthias was a fabulous host, made sure we had everything we needed, gave us fantastic recommendations for the locality and gave us a street name for the perfect starting point for our early morning climb to the 'sign'. LA was more than we imagined, we will be back and with Matthias is he'll have us!"
const HomeImg = 'https://www.territorysupply.com/wp-content/uploads/2021/01/best-airbnbs-oakland-california.jpg'
const ProfilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

function ReviewCard(props) {
    const {img_url, ratings, review, user_name, user_location} = props

    return (
        <div className='ReviewCard'>
            <img src={HomeImg} id='main'></img>
            <div className='rowOfStart'>
                <img src={starImg} className='star'></img>
                <img src={starImg} className='star'></img>
                <img src={starImg} className='star'></img>
                <img src={starImg} className='star'></img>
                <img src={starImg} className='star'></img>
            </div>
            <p>'{REVIEW}'</p>

            <div className='userInfo'>
                <img src={ProfilePic} className='profilePic'></img>
                <div className='userContent'>
                    <p id='userName'>sss</p>
                    <p id='userLocation'>ddd</p>
                </div>
                
            </div>

            
        </div>
    )
}

export default ReviewCard