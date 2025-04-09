import "../styles/sitePlan-realty.css";
import siteplanrealty from "../assets/siteplan-realty.jpg";
import upperfloor from "../assets/upperfloor2.png";

const SitePlanRealty = () => {
  return (
    <>
      <div className="site">
        <h1>SITE PLAN - REALTY</h1>
        <div className="imgs">
          <div className="img1">
            <img src={siteplanrealty} />
          </div>
          <div className="img2">
            <img src={upperfloor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SitePlanRealty;
