import './CallToActionCard.css'
import InputField from '../InputField/InputField.js'

function CallToActionCard(){
    return(
        <div className='CallToActionCard'>
            <h1>Find places to stay on Airbnb</h1>
            <h3>Discover entire homes and private rooms perfect for any trip</h3>
            <InputField header="Location" placeholder='Nearby' />
            <div className='two-input-fields'>
                <InputField header="Check In" placeholder='Add Date' />
                <InputField header="Check Out" placeholder='Add Date' />
            </div>
            <div className='two-input-fields'>
                <InputField header="# of Adults" placeholder='2' />
                <InputField header="# of Childred" placeholder='0' />
            </div>
        </div>
    )
}

export default CallToActionCard