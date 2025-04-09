import "../styles/sitePlan-Red.css";
import redPlan from "../assets/redPlan.png";

const SitePlanRed = () => {
  return (
    <>
      <div className="container">
        <div className="view-site-header">
          <h1>SITE PLAN</h1>
          <h2>REALTY</h2>
        </div>
        <div className="site-view">
          <img src={redPlan} />
          <button>VIEW SITE PLAN</button>
        </div>
        <div className="view-site-header2">
          <h2>4 BEDROOM TERRACE HOUSE</h2>
        </div>
        <div className="site-view">
          <img src={redPlan} />
          <button>VIEW SITE PLAN</button>
        </div>
      </div>
    </>
  );
};

export default SitePlanRed;
