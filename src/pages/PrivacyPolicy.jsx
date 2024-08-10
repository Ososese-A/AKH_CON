import "../styles/paper.css";
import logo from '../assets/logo.svg';

const PrivacyPolicy = () => {
    return ( 
        <>
        <div className="paper-holder">

            <div className="paper">
            <div className="paper-icon">
                <img src={logo} />
            </div>
            <div className="paper-content">
                <h1 className="page-holder-title">PRIVACY POLICY</h1>
                <p>
                This privacy policy describes how we AKHCON Realty collect, use and disclose your personal information when you use our services. By using our services, you consent to the collection, use and disclosure of your personal information as described in accordance with this Privacy Policy.
                <br />
                This Privacy Policy was last Updated on 20th February, 2023.
                </p>



                <h3 className="page-holder-sub-title">Information We Collect</h3>
                <p>Interaction with our services such as when you visit our website, contact us through email, phone or other means may yield collection of personal information like: Name, Contact Information (e.g. email address, phone number), Address, Payment information, Preferences and interests alongside other information you choose to share with us.</p>


                <h3 className="page-holder-sub-title">How we Use your Information</h3>
                <p>The information you provide may be used for the following purposes: </p>
                <ul>
                    <li>To provide and maintain Top Notch services to you.</li>
                    <li>To communicate with you and respond to your inquiries</li>
                    <li>To process transactions and payments</li>
                    <li>To fulfill Contractual obligations</li>
                    <li>To personalized your experience and contents being tailored to you.</li>
                    <li>To conduct market research and analysis</li>
                    <li>To send you marketing communications and promotional offers at any point in time</li>
                    <li>To comply with legal and regulatory requirements</li>
                </ul>
                <p>We will use this information only in respond to your requests and to provide our services.</p>
                


                <h3 className="page-holder-sub-title">How we Disclose your Information</h3>
                <p>The information you provide may be disclosed to third parties for the following purposes:</p>
                <ul>
                <li>Service Providers: Information may be shared with third-party service providers who assist us in operating our business and providing our services.</li>
                <li>Business Partners: Information may be shared with our business partners for joint marketing activities, promotions or any other legitimate business purpose.</li>
                <li>Legal purposes: We may disclose your information to comply with applicable laws, regulations, legal processes or government requests.</li>
                <li>Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li>Otherwise with consent and direction: We may disclose your information other certain third parties based on your consent and direction</li>
                </ul>



                <h3 className="page-holder-sub-title">Your Choices</h3>
                <p>You have the choice to update or correct your information by contacting us directly. You can opt-out of receiving marketing communications from us. You can disable cookies in your browser settings, although this may affect your ability to use certain features of our website.</p>

                <h3 className="page-holder-sub-title">Data Security</h3>
                <p>We engage in reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We value your trust in providing us Your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

                <h3 className="page-holder-sub-title">Children’s Privacy</h3>
                <p>Our services are not directed to individuals under the age of 18, and we do knowingly collect personal information from children. In the case we discover that a child under the age of 18 has provided us with personal information, we immediately delete from our servers. If you believe that we have collected personal information from a child without parental consent, please contact us to enable us take appropriate actions.</p>

                <h3 className="page-holder-sub-title">Changes to this Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time, and any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy from time to time for any updates or changes.</p>

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
 
export default PrivacyPolicy;