import { useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import "../styles/paper.css";
import "../styles/house-contract.css";
import logo from '../assets/logo.svg';

const HouseContract = () => {
    const [sign, setSign] = useState()
    const [url, setUrl] = useState()

    const handleClear = () => {
        sign.clear()
        setUrl('')
    }

    const handleGenerate = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    }

    return ( 
        <>
        <div className="paper-holder">

        <div className="paper">
            <div className="paper-icon">
                <img src={logo} />
            </div>
            <div className="paper-content">
                <h1 className="page-holder-title">HOUSE CONTRACT</h1>
                <p>
                AKHCON realty is an estate full of modernized homes with beautiful
                aesthetics. <br />
                Our aim is to provide aspiring home owners with homes that suit
                their taste and an environment to match the beauty of their homes
                without the stress of excessive paperwork. <br />
                We have been able to develop an online process where aspiring home
                owners can take a look through their potential homes and make the
                necessary payment all from the click of a button. <br />
                You also have the option of touring the house in person before you
                make any payment.
                </p>



                <h3 className="page-holder-sub-title">Amenities</h3>
                <p>Our estate has been fully equipped with features such as:</p>
                <ul>
                <li>Pedestrian walkways</li>
                <li>Street CCTV for surveillance and security</li>
                <li>Intercom system</li>
                <li>Central gas system</li>
                <li>Automated centralized sprinkler system</li>
                <li>Fiber optics solar street light</li>
                </ul>



                <h3 className="page-holder-sub-title">Apartments</h3>
                <p>
                Nestled in a tranquil neighborhood, this charming four-bedroom terrace house awaits you. As you step through the front door, you’ll be greeted by an airy foyer that exudes warmth and elegance. The spacious living room, bathed in natural light, invites cozy gatherings with loved ones. Imagine sipping your morning coffee on the private terrace, surrounded by lush greenery and chirping birds. The well-appointed kitchen, complete with modern appliances, beckons culinary adventures. Upstairs, the serene bedrooms offer a peaceful haven after a long day. And don’t miss the delightful backyard—a perfect spot for alfresco dining or stargazing. With ample parking and a convenient maid’s quarters, this house seamlessly blends comfort and convenience
                </p>
                


                <h3 className="page-holder-sub-title">Neighborhood</h3>
                <p>
                The estate is situated in a conducive location with a lot of
                facilities and popular locations neighboring the estate. Our
                Internal neighborhood which is the neighborhood within the estate is
                fully equipped with <span className="paper-colortext">amenities</span> to
                give you a home worth boasting about. <br />
                Our external neighborhood which are the areas outside the confines
                of the estate has some exciting locations and facilities around such
                as:
                </p>
                <ul>
                <li>Sheristan hotel (15 minutes drive)</li>
                <li>Loyola jesuit (10 minutes drive)</li>
                </ul>
            </div>
            </div>

            <div className="contract-prev-con">
            <div className="contract-prev">
            <img src={url}/>
            </div>
            <p>Buyer's Signature</p>
            </div>

            <p className="contract-txt"><b>Please Sign in the digital signature pad below or upload an image of your signature</b></p>

            <div className="contract-sign-con">
            <p><b>Digital Signature Pad:</b></p>
            <div className="contract-sign">
                <ReactSignatureCanvas 
                canvasProps={{width: 320, height: 160, className:'sigCanvas'}}
                ref={data=>setSign(data)}
                />
            </div>
            </div>

            <div className="contract-sign-btn">
            <button onClick={handleGenerate} className="w-btn">PREVIEW</button>
            <button onClick={handleClear} className="w-btn">CLEAR</button>
            </div>


            <div className="doc-owner-btn">
            <button className="b-btn">DONE</button>
            </div>
        </div>
        </>
     );
}
 
export default HouseContract;