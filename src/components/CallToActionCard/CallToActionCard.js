import './CallToActionCard.css'
import InputField from '../InputField/InputField.js'
import PillView from '../PillView/PillView.js'
import Button from '../Button/Button.js'


function CallToActionCard(){
    return(
        <div className='CallToActionCard'>
            <h1>Find places to stay on Airbnb</h1>

            <h3>Discover entire homes and private rooms perfect for any trip</h3>
            
            <InputField header="Location" placeholder='Nearby' type='text'/>

            <div className='two-input-fields'>
                <InputField header="Check In" placeholder='Add Date' type='date'/>
                <InputField header="Check Out" placeholder='Add Date' type='date'/>
            </div>
            
            <div className='two-input-fields'>
                <InputField header="# of Adults" placeholder='2' type='number'/>
                <InputField header="# of Childred" placeholder='0' type='number'/>
            </div>
            
            <p>AMENITIES</p>
            
            <div className='pills'>
                <PillView title='HotTub' />
                <PillView title='Pool' />
                <PillView title='Wifi' />
            </div>
            <div className='search-btn'>
                <Button text='Search' backgroundColor='#FF5A5F' textColor='white' borderColor='#FF5A5F'/>
            </div>   
        </div>
    )
}

export default CallToActionCard