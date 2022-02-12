import './InputField.css'

function InputField(props) {
    const { header, placeholder } = props
    return(
        <div className='InputField'>
            <p id='header'>{header}</p> 
            <p id='placeholder'>{placeholder}</p>
        </div>
    )
}

export default InputField