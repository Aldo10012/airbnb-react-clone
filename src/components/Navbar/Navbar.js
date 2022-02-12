import './Navbar.css'
import logo from '../../images/airbnb-logo.png'

function Navbar(){
    return(
        <div className='Navbar'>
            <img src={logo} alt='logo'></img>
            <div>
                <p>Become a host</p>
                <p>Helo</p>
                <p>Sign up</p>
                <p>Log in</p>
            </div>
        </div>
    )
}

export default Navbar