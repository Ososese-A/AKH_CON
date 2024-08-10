import "../styles/contact.css";
import wat from '../assets/whatsapp-icon.svg';
import env from '../assets/envelope-icon.svg';
import pho from '../assets/phone-icon.svg';

const Contact = () => {
    return ( 
        <>
        <div className="con-holder-contact">

            <h1 className="con-holder-title">CONTACT</h1>

            <h2 className="contact-txt">WHAT QUESTIONS DO YOU HAVE ?</h2>

            <p className="contact-txt">Feel free to reach out to us through any of the following channels if you have any questions </p>

            <div className="contact-means">
                <div className="contact-paper-contact">
                    <img src={wat} alt="" />
                    <p>+234 803 703 773 4</p>
                </div>
                <div className="contact-paper-contact">
                    <img src={pho} alt="" />
                    <p>08037037734</p>
                </div>
                <div className="contact-paper-contact">
                    <img src={env} alt="" />
                    <p>akhgroupofcompanies@gmail.com</p>
                </div>
            </div>

            <h2 className="contact-txt tact-faq">Frequently Asked Questions (FAQ)</h2>
            <div className="contact-paper-faq">
                <b className="contact-txt">If I pay online how will I prove that I am the owner of the building ?</b>
                <p className="contact-li contact-txt">Once your online payment has been completed and confirmed you will be sent a document of ownership to solidify your purchase.</p>
            </div>

            <div className="contact-paper-faq">
                <b className="contact-txt">What happens if I loose my document of ownership before I am able to claim my home ?</b>
                <p className="contact-li contact-txt">If this happens you will be able to easily get another copy of the document from your <span>profile page.</span></p>
            </div>

            <div className="contact-paper-faq">
                <b className="contact-txt">How do I get to my profile page ?</b>
                <p className="contact-li contact-txt">You can get to your <span>profile page</span> by logging in. Your profile page is the first page that pops up once you log in.</p>
            </div>

            <div className="contact-paper-faq">
                <b className="contact-txt">How can I get a discount on my home purchase ?</b>
                <p className="contact-li contact-txt">There is already a discount if you are able to pay with the <span>full payment option</span></p>
            </div>

            <div className="doc-owner-btn">
            <button className="w-btn">DONE</button>
            </div>

        </div>
        </>
     );
}
 
export default Contact;