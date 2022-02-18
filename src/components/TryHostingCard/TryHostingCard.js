import './TryHostingCard.css'
import Button from '../Button/Button.js'

function TryHostingCard() {
    return(
        <div className='TryHostingCard'>
            <div className='content'>
                <h1>Try hosting</h1>
                <h3>Earn up to $3,838/month by sharing your space in Oakland.</h3>
                <div className='btn'>
                    <Button text='Learn More' backgroundColor='white' textColor='black' borderColor='white' />
                </div>
                
            </div>
            
        </div>
    )
}

export default TryHostingCard