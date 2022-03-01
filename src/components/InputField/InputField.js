import './InputField.css'

function InputField(props) {
    const { header, placeholder, type } = props
    return(
        <div className='InputField'>
            <form>
                <label id='header'>{header}</label><br/>
                <input 
                    id='placeholder'
                    type={type}
                    placeholder={placeholder}
                />
            </form>
        </div>
    )
}

export default InputField