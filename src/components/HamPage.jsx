import { Link } from "react-router-dom";

const HamPage = () => {
    return ( 
        <>
        <div className="ham-nav-page">
            <ul>
                <li className="ham-item"><Link to='/'>HOME</Link></li>
                <li className="ham-item"><Link to='/explore'>EXPLORE</Link></li>
                <li className="ham-item"><Link to='/about'>ABOUT</Link></li>
                <li className="ham-item"><Link to='/contact'>CONTACT</Link></li>
                <li className="ham-item"><Link to=''><button class="b-btn">SIGN UP</button></Link></li>
                <li className="ham-item"><Link to=''><button class="w-btn">LOG IN</button></Link></li>
                {/* <li className="ham-item"><Link to=''>TERMS & CONDITIONS</Link></li>
                <li className="ham-item"><Link to=''>PRIVACY POLICY</Link></li> */}
            </ul>
        </div>
        </>
     );
}
 
export default HamPage;