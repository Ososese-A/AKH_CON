import { Link } from 'react-router-dom';
import map from '../assets/map.png';
import '../styles/footer.css';

const Footer = () => {
    return ( 
        <>

    <div class="location">
        <div class="header">
            <h2>LOCATION</h2>
        </div>
        <div class="map">
            <img src={map} alt="map-image" />
        </div>
        <div class="explore">

            <div className='explore-spread'>
            <div class="explore-content">
                <h4>REALTY</h4>
                <ul class="listLinks">
                    <Link to=''><li><p>Apartment</p></li></Link>
                    <Link to=''><li><p>Location</p></li></Link>
                    <Link to=''><li><p>Amenities</p></li></Link>
                    <Link to=''><li><p>Neighborhood</p></li></Link>
                    <Link to=''><li><p>Site Plan</p></li></Link>
                </ul>
            </div>
            <div class="explore-content">
                <h4>INFORMATION</h4>
                <ul class="listLinks">
                    <Link to='/policy'><li><p>Privacy Policy</p></li></Link>
                    <Link to='/terms'><li><p>Terms and Conditions</p></li></Link>
                </ul>
            </div>
            </div>
            
            <div className='explore-spread'>
            <div class="explore-content">
                <h4>QUICK LINKS</h4>
                <ul class="listLinks">
                    <Link to=''><li><p>Home</p></li></Link>
                    <Link to=''><li><p>Explore</p></li></Link>
                    <Link to=''><li><p>About</p></li></Link>
                    <Link to=''><li><p>Contact</p></li></Link>
                </ul>
            </div>
            <div class="explore-content" id="faq">
                <h4>FAQ</h4>
                <ul class="listLinks">
                    <Link to=''><li><p>How do I pay for an<br /> Apartment?</p></li></Link>
                    <Link to=''><li><p>Can I pay an installments?</p></li></Link>
                    <Link to=''><li><p>Can I see the property in <br />person?</p></li></Link>
                </ul>
            </div>
            </div>

            <div class="explore-content">
                <h4>CONTACT</h4>
                <ul class="listLinks">
                    <Link to=''><li><p>+234 8037037734</p></li></Link>
                    <Link to=''><li><p>akh@gmail.com</p></li></Link>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p>AKH CONSTRUCTION LIMITED © Copyright 2023</p>
        </div>
    </div>
        </>
     );
}
 
export default Footer;