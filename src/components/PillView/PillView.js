import './PillView.css'

function PillView(props) {
    const { title } = props
    return(
        <div className='PillView'>
            <h4>{title}</h4>
        </div>
    )
}

export default PillView