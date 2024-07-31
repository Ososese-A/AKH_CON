import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/nav.css';

const Navbar = () => {
    return ( 
        <>
        <div class="whole">
        <nav class="navBar">
            <div class="navBar-container">
                <div class="logo">
                    <img src={logo} alt="AKH-logo" />
                </div>
                <div class="links">
                    <Link to='/'>HOME</Link>
                    <Link to='/explore'>EXPLORE</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                </div>
                <div class="btns">
                    <Link to=''><button class="b-btn">SIGN UP</button></Link>
                    <Link to=''><button class="w-btn">LOG IN</button></Link>
                </div>
            </div>
        </nav>
        </div>
        </>
     );
}
 
export default Navbar;