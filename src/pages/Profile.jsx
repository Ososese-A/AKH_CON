import "../styles/profile.css";

const Profile = () => {
    return ( 
        <>
        <div className="con-holder-contact">

            <div className="con-holder-title">
                <h1>PROFILE</h1>
            </div>

            <h2 className="profile-txt">Personal Information</h2>
            <div className="profile-con">
                <div className="profile-a">
                    <div className="profile-l profile-ed">
                        <p><b>Last Name: </b><span>Aliyu</span></p>
                        <p><b>First Name: </b><span>Alhassan</span></p>
                        <p><b>DOB: </b><span>April 23rd 2005</span></p>
                        <p><b>Gender: </b><span>Male</span></p>
                    </div>

                    <div className="profile-r profile-ed">
                        <p><b>Email: </b><span>adamusemail@gmail.com</span></p>
                        <p><b>Mobile Number: </b><span>09123375464</span></p>
                        <p><b>Whatsapp Number: </b><span>+234 9123375464</span></p>
                        <p><b>Residential Address: </b><span>No 4 minami island street Kachia Meduguri Nigeria</span></p>
                    </div>
                </div>
                <div className="profile-btn">
                    <button className="w-btn">EDIT</button>
                </div>
            </div>

            <h2 className="profile-txt">Realty Information</h2>

            <div className="profile-con">
                <div className="profile-a-b">
                    <div className="profile-l profile-align">
                        <p><b>Number of Home(s) Owned</b> <br /> <span>[3]</span></p>
                        <p className="profile-spacer-a">
                            <b className="profile-spacer-b">List of Home(s) Owned:</b> <br /> 
                            <ul className="profile-spacer-b"><li>4 Bedroom Terrace House 1a</li></ul>
                            <button className="w-btn">GET DOCUMENT OF OWNERSHIP</button>
                            <ul className="profile-spacer-b"><li>4 Bedroom Terrace House 2a</li></ul>
                            <button className="w-btn">GET DOCUMENT OF OWNERSHIP</button>
                            <ul className="profile-spacer-b"><li>4 Bedroom Terrace House 2c</li></ul>
                            <button className="w-btn">GET DOCUMENT OF OWNERSHIP</button>
                        </p>
                    </div>
                    <div className="profile-c profile-align">
                        <p><b>Number of Home(s) Claimed</b> <br /> <span>[3]</span></p>
                        <p className="profile-spacer-a">
                            <b className="profile-spacer-b">List of Home(s) Claimed:</b> <br /> 
                            <ul className="profile-spacer-b">
                                <li>4 Bedroom Terrace House 1a</li>
                                <ul><li>Price: ₦180 000 000</li></ul>
                            </ul>
                            <ul className="profile-spacer-b">
                                <li>4 Bedroom Terrace House 2a</li>
                                <ul><li>Price: ₦180 000 000</li></ul>
                            </ul>
                            <ul className="profile-spacer-b">
                                <li>4 Bedroom Terrace House 2c</li>
                                <ul><li>Price: ₦180 000 000</li></ul>
                            </ul>
                        </p>
                    </div>
                    <div className="profile-r profile-align">
                        <p><b>Total Cost of Home(s)</b> <br /> <ul><li>Price: ₦ 360 000 000</li></ul></p>
                        <p className="profile-spacer-a">
                            <b className="profile-spacer-b">Pending Installmental Payment</b> <br /> 
                            <ul className="profile-spacer-b">
                                <li>4 Bedroom Terrace House 2c</li>
                                <ul>
                                    <li>Price: ₦180 000 000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                                    <li>Amount Unpaid: ₦180 000 000</li>
                                </ul>
                            </ul>
                            <button className="w-btn">COMPLETE PAYMENT</button>
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Profile;