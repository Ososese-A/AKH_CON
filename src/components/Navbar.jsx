import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import ham from '../assets/hamnav.svg';
import hamx from '../assets/hamnavx.svg';
import '../styles/nav.css';
import HamPage from './HamPage';
import { useState } from 'react';

const Navbar = () => {
    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

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
                <div className="ham" onClick={toggleNavbar}>
                    <img id={openLinks ? "close" : "open"} src={ham} alt="ham-nav icon" />
                    <img id={openLinks ? "open" : "close"} src={hamx} alt="ham-nav icon" />
                </div>
            </div>
        </nav>
        <div id={openLinks ? "open" : "close"}>
        <HamPage />
        </div>
        </div>
        </>
     );
}
 
export default Navbar;