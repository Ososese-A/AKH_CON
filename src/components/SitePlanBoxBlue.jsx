import { Link } from 'react-router-dom';
import '../styles/site-plan-box.css';

const SitePlanBoxBlue = () => {
    return ( 
        <>
        <div className='con-holder-tour-box'>
            <h1 className='con-holder-title'>SITE PLAN</h1>
        </div>
        <div class="b-bg-spread_b">
                <Link to="/house-plan"><button className='b-btn'>VIEW SITE PLAN</button></Link>
        </div>
        </>
     );
}
 
export default SitePlanBoxBlue;