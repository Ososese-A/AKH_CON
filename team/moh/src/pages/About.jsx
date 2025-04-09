import "../styles/about.css";
import icon from "../assets/icon.svg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="icon">
          <img src={icon} />
        </div>
        <div className="content">
          <h1>ABOUT</h1>
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
          <h3>Amenities</h3>
          <p>Our estate has been fully equipped with features such as:</p>
          <ul>
            <li>Pedestrian walkways</li>
            <li>Street CCTV for surveillance and security</li>
            <li>Intercom system</li>
            <li>Central gas system</li>
            <li>Automated centralized sprinkler system</li>
            <li>Fiber optics solar street light</li>
          </ul>
          <h3>Apartments</h3>
          <p>
            We have a variety of homes to fit the specifications of whatever
            home our aspiring home owners have in mind which include:
          </p>
          <ul>
            <li>
              Four bedroom terrace house; Four bedroom apartment with 4 parking
              spots and a maid quarters
            </li>
            <li>
              Five bedroom detached duplex ; Five bedroom apartment with 5
              parking spots and a maid quarters
            </li>
            <li>
              Four bedroom terrace duplex; Four bedroom apartment with 4 parking
              spots and a maid quarters
            </li>
            <li>
              Two bedroom semi-detached duplex; Two bedroom apartment with 2
              parking spots and a maid quarters
            </li>
          </ul>
          <h3>Neighborhood</h3>
          <p>
            The estate is situated in a conducive location with a lot of
            facilities and popular locations neighboring the estate. Our
            Internal neighborhood which is the neighborhood within the estate is
            fully equipped with <span className="colortext">amenities</span> to
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
    </>
  );
};

export default About;
