import master_room from '../assets/master-room.png';
import master_bath from '../assets/master-bath.png';
import living_room from '../assets/living-room.png';
import main_living_room from '../assets/main-living-room.png';
import kitchen from '../assets/kitchen.png';
import room_2 from '../assets/slide_3.png';
import room_3 from '../assets/slide_4.png';
import room_4 from '../assets/room_4.png';
import balcony from '../assets/balcony.png';
import front_ext from '../assets/slide_1.png';
import back_ext from '../assets/ext-back.png';
import '../styles/gallery.css';

const Gallery = () => {
    return ( 
        <>
                <div className="con-holder-contact">
            <div className="con-holder-title">
                <h1>FEATURES GALLERY</h1>
            </div>
            <div class="con_img_w">
                <img src={front_ext} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>House Exterior (Front)</p></div>
            </div>
            <div class="con_img_w">
                <img src={main_living_room} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Main Living Room</p></div>
            </div>
            <div class="con_img_w">
                <img src={living_room} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>First Floor Living Room</p></div>
            </div>
            <div class="con_img_w">
                <img src={kitchen} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Kitchen</p></div>
            </div>
            <div class="con_img_w">
                <img src={master_room} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Master Bedroom (Second Floor)</p></div>
            </div>
            <div class="con_img_w">
                <img src={master_bath} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Master Bedroom Bathroom</p></div>
            </div>
            <div class="con_img_w">
                <img src={room_2} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>2nd Bedroom (First Floor)</p></div>
            </div>
            <div class="con_img_w">
                <img src={room_3} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>3rd Bedroom (First Floor)</p></div>
            </div>
            <div class="con_img_w">
                <img src={room_4} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>4th Bedroom (Second Floor)</p></div>
            </div>
            <div class="con_img_w">
                <img src={balcony} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>Balcony</p></div>
            </div>
            <div class="con_img_w">
                <img src={back_ext} alt="construction image" />
                <div className='gallery-tag-con'><p className='gallery-tag'>House Exterior (Back)</p></div>
            </div>
        </div>
        </>
     );
}
 
export default Gallery;