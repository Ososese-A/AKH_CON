import "../styles/featuresGallery.css";
import livingroom from "../assets/livingroom.jpg";
import masterbedroom from "../assets/masterbedroom.png";
import kitchen from "../assets/kitchen.jpg";
import secondroom from "../assets/secondroom.jpg";
import thirdbedroom from "../assets/thirdbedroom.jpg";
import maidsbedroom from "../assets/maidsbedroom.jpg";
import anetteroom from "../assets/anetteroom.jpg";
import garage from "../assets/garage.jpg";

const FeaturesGallery = () => {
  return (
    <>
      <div className="room">
        <h1>FEATURES GALLERY</h1>
        <div className="contain">
          <div className="para" id="para">
            <img src={livingroom} />
            <p>Living Room</p>
          </div>
          <div className="para" id="para1">
            <img src={masterbedroom} />
            <p>Master Bedroom</p>
          </div>
          <div className="para" id="para2">
            <img src={kitchen} />
            <p>Kitchen & Dining area</p>
          </div>
          <div className="para" id="para3">
            <img src={secondroom} />
            <p>Second Bedroom</p>
          </div>
          <div className="para" id="para4">
            <img src={thirdbedroom} />
            <p>Third Bedroom</p>
          </div>
          <div className="para" id="para5">
            <img src={maidsbedroom} />
            <p>Maids Bedroom</p>
          </div>
          <div className="para" id="para6">
            <img src={anetteroom} />
            <p>Anette Room</p>
          </div>
          <div className="para" id="para7">
            <img src={garage} />
            <p>Garage</p>
          </div>
        </div>
        <div className="btn">
          <button>DONE</button>
        </div>
      </div>
    </>
  );
};

export default FeaturesGallery;
