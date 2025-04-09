import "../styles/contactUs.css";
import logo1 from "../assets/envelope.svg";
import logo2 from "../assets/phone.svg";
import logo3 from "../assets/Vector.svg";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="text">
          <h1>CONTACT</h1>
          <h2>WHAT QUESTIONS DO YOU HAVE?</h2>
          <p>
            Feel free to reach out to us through any of the following channels
            if you have any questions
          </p>
        </div>
        <div className="box">
          <div className="whatsapp">
            <img src={logo1} />
            <p>+234 803 703 773 4</p>
          </div>
          <div className="number">
            <img src={logo2} />
            <p>08037037734</p>
          </div>
          <div className="gmail">
            <img src={logo3} />
            <p>akhgroupofcompanies@gmail.com</p>
          </div>
        </div>
        <div className="questions">
          <div className="head">
            <h2>Frequently Asked Question(FAQ)</h2>
          </div>
          <div className="prove">
            <p>
              <b>
                If I pay online how will I prove that I am the owner of the
                building ?
              </b>
            </p>
            <ul>
              <li>
                Once your online payment has been completed and confirmed you
                will be sent a document of ownership to solidify your purchase.
              </li>
            </ul>
          </div>
          <div className="ownership">
            <p>
              <b>
                What happens if I loose my document of ownership before I am
                able to claim my home ?
              </b>
            </p>
            <ul>
              <li>
                If this happens you will be able to easily get another copy of
                the document from your{" "}
                <span className="colortext">profile page.</span>
              </li>
            </ul>
          </div>
          <div className="profilePage">
            <p>
              <b>How do I get my profile page ? </b>
            </p>
            <ul>
              <li>
                You can get to your profile page by logging in. Your
                <span className="colortext">profile page</span> is the first
                page that pops up once you log in.
              </li>
            </ul>
          </div>
          <div className="discount">
            <p>
              <b>How can I get a discount on my home purchase ?</b>
            </p>
            <ul>
              <li>
                There is already a discount if you are able to pay with out
                <span className="colortext">full payment option</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
