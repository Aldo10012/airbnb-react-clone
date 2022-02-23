import './Content.css'

const speech_bubble = 'http://cdn.onlinewebfonts.com/svg/img_35494.png'

function Content(props) {
    const {img, header, text} = props

    return(
        <div className='Content'>
            <img src={img}></img>
            <h2>{header}</h2>
            <p>{text}.</p>
        </div>
    )
}

export default Content