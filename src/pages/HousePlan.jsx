import floor_0 from '../assets/floor_0.png';
import floor_1 from '../assets/floor_1.png';
import floor_2 from '../assets/floor_2.png';

const HousePlan = () => {
    return ( 
        <>
        <div className="con-holder-contact">
            <div className="con-holder-title">
                <h1>FEATURES GALLERY</h1>
            </div>
            <div class="con_img_w">
                <img src={floor_0} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Ground Floor Plan</p></div>
            </div>
            <div class="con_img_w">
                <img src={floor_1} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>First Floor Plan</p></div>
            </div>
            <div class="con_img_w">
                <img src={floor_2} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Second Floor Plan</p></div>
            </div>
        </div>
        </>
     );
}
 
export default HousePlan;