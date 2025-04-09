import "../styles/sitePlan-bedroom.css";
import floorPlan1 from "../assets/upperfloor1.png";
import floorPlan2 from "../assets/upperfloor2.png";

const SitePlan = () => {
  return (
    <>
      <div className="site">
        <h1>SITE PLAN - 4 BEDROOM TERRACE HOUSE</h1>
        <div className="imgs">
          <div className="img1">
            <img src={floorPlan1} />
          </div>
          <div className="img2">
            <img src={floorPlan2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SitePlan;
