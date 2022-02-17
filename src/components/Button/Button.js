import './Button.css'

function Button(props) {
    const { text, backgroundColor, textColor:color, borderColor } = props

    return(
        <div className='Button' style={{backgroundColor, borderColor}}>
            <p style={{color}}>{text}</p>
        </div>
    )
}

export default Button