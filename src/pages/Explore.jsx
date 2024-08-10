import FeaturesBox from "../components/FeaturesBox";
import PaymentBox from "../components/PaymentBox";
import SitePlanBoxBlue from "../components/SitePlanBoxBlue";
import Slider from "../components/Slider";
import TourBox from "../components/TourBox";

const Explore = () => {
    return ( 
        <>
        <div className="con-holder-explore-t">
        <h1 className='con-holder-title'>EXPLORE</h1>
        </div>
        <div className="con-holder-explore">
        
            <Slider />
            <FeaturesBox />
            <TourBox />
            <PaymentBox />
            <SitePlanBoxBlue />
        </div>
        </>
     );
}
 
export default Explore;