import './JustBookedCard.css'

const starImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png'

function JustBookedCard(props) {
    const {img, description, slogan, cost, review, number_of_reviews} = props

    return(
        <div className='JustBookedCard'>
            <img src={img} id='main'></img>
            <dic id='descriptionSection'>
                <p id='description'>{description}</p>
                <p><img src={starImg} id='star'></img> <strong>{review}</strong> ({number_of_reviews})</p>
            </dic>
            
            <p id='slogan'>{slogan}</p>
            <p><strong>${cost}</strong> / night</p>
        </div>
    )
}

export default JustBookedCard