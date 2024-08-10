import '../styles/feature-box.css';
import f_box_1 from '../assets/living-room.png';
import f_box_2 from '../assets/master-room.png';
import f_box_3 from '../assets/master-bath.png';
import f_box_4 from '../assets/kitchen.png';
import { Link } from 'react-router-dom';

const FeaturesBox = () => {
    return ( 
        <>
        <div className="con-holder">
            <h1 className="con-holder-title">FEATURES</h1>
            <div className="f-box-big">
                <div className="f-box-l">
                    <div className='f-box-spacer'>
                        <img src={f_box_1} alt="" className='f-img' />
                        <div className="f-box-img-t"><p>LIving Room</p></div>
                    </div>
                </div>
                <div className="f-box-c">
                    <div className='f-box-c-box f-box-spacer f-big'>
                    <div className="f-box-img-t"><p>Master Bedroom</p></div>
                        <img src={f_box_2} alt="" className='f-img' />
                    </div>
                    <div className='f-box-spacer f-small'>
                        <img src={f_box_2} alt="" className='f-img' />
                        <div className="f-box-img-t"><p>Master Bedroom</p></div>
                    </div>
                    <div className='f-box-spacer f-small'>
                        <img src={f_box_3} alt="" className='f-img' />
                        <div className="f-box-img-t"><p>Bathroom</p></div>
                    </div>
                    <div className='f-box-c-box f-box-spacer f-big'>
                        <img src={f_box_3} alt="" className='f-img' />
                        <div className="f-box-img-t"><p>Bathroom</p></div>
                    </div>
                </div>
                <div className="f-box-r">
                    <div>
                        <img src={f_box_4} alt="" className='f-img' />
                        <div className="f-box-img-t"><p>Kitchen</p></div>
                    </div>
                </div>
            </div>

            <div className="f-box-btn">
            <Link to='/gallery'><button class="w-btn">VIEW MORE</button></Link>
            </div>
        </div>
        </>
     );
}
 
export default FeaturesBox;