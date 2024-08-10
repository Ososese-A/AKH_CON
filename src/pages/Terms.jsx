import "../styles/paper.css";
import logo from '../assets/logo.svg';

const Terms = () => {
    return ( 
        <>
        <div className="paper-holder">

            <div className="paper">
            <div className="paper-icon">
                <img src={logo} />
            </div>
            <div className="paper-content">
                <h1 className="page-holder-title">TERMS AND CONDITIONS</h1>
                <p>These Terms and Conditions govern your use of the services provided by we AKHCON Realty and your access to our website and any other online platforms operated by us. By using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our services.
                    <br />
                    This Privacy Policy was last Updated on 20th February, 2023.</p>



                <h3 className="page-holder-sub-title">Use of Services</h3>
                <p>You must be at least 18 years old to make use of our services. By using our services, you represent and warrant that you are of a legal age to form a binding contract with us.</p>


                <h3 className="page-holder-sub-title">Property Listings</h3>
                <p>We provide property listings for general information purposes only. You have the option of touring in person before making any payment. We do not guarantee the accuracy, completeness or reliability of any information provided in the listings. You acknowledge that the prices and availability of properties are subject to change without notice. </p>

                <h3 className="page-holder-sub-title">Communication and Feedback</h3>
                <p>By using our services, you consent to receive information from us including promotional emails, newsletters and updates. You may opt-out of receiving marketing at any time following the instructions provided in the communication. We welcome any feedback or suggestions you have as regards our services. However, any feedback or suggestions you provide will be considered non-confidential and non-proprietary. We may use your feedback and suggestion for any purpose without any compensation to you.</p>

                <h3 className="page-holder-sub-title">Intellectual Property</h3>
                <p>All content included in our services such as text, graphics, logos, images and software, is the property of AKHCON Realty and its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify or create derivative works of any content without our prior written consent.</p>

                <h3 className="page-holder-sub-title">Governing Law</h3>
                <p>Your privacy is of utmost importance to us. Please refer to our Privacy Policy for information about how we collect and make use of your personal information. </p>

                <h3 className="page-holder-sub-title">Limitation and Liability</h3>
                <p>To the fullest extent permitted by Law, we shall not be liable for any incidental, special, indirect, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of the use of our services.</p>

                <h3 className="page-holder-sub-title">Indemnification</h3>
                <p>These Terms shall be governed in accordance with the Laws of the Federal Republic of Nigeria, without regard to its conflict of law principles. Any dispute in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>

                <h3 className="page-holder-sub-title">Changes to Terms</h3>
                <p>We reserve the right to update or modify these Terms at any time without prior notice. Any changes to these terms will be effective immediately upon posting the revised Terms on our website. Your continued use of our services after the posting of the revised Terms and Conditions constitutes your acceptance of the changes.</p>

                <h3 className="page-holder-sub-title">Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us through any of the channels below:</p>
                <ul>
                    <li>WhatsApp/Phone Number: +2348037037734</li>
                    <li>Email: akhgroupofcompanies@gmail.com</li>
                </ul>
            </div>
            </div>

            <div className="doc-owner-btn">
            <button className="w-btn">DONE</button>
            </div>

        </div>
        </>
     );
}
 
export default Terms;