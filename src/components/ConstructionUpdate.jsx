import { Link } from 'react-router-dom';
import update_1 from '../assets/up_1.jpg';
import update_2 from '../assets/up_2.jpg';
import update_3 from '../assets/up_3.jpg';
import update_4 from '../assets/up_4.jpg';
import '../styles/con-update.css';

const ConstructionUpdate = () => {
    return ( 
    <>
        <div class="con-holder">
        <h1 className='con-holder-title'>CONSTRUCTION UPDATE</h1>
            <div class="box_a">
                <div class="box_tit_a">2017 - Land Aquisition</div>
                <div class="up_con_con">
                    <div class="left_line_a">
                    </div>
                    <div class="up_container">
                        <div class="con_content">
                            <div class="con_img">
                                <img src={update_1} alt="construction image" />
                            </div>
                            <div class="con_txt">
                                <p>This was the year AKHCON realty <br /> began our journey...</p>
                                <button class="w-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_a">
                <div class="box_tit_b">2018 - Foundations</div>
                <div class="up_con_con">
                    <div class="left_line_b">
                    </div>
                    <div class="up_container">
                        <div class="con_content">
                            <div class="con_img">
                                <img src={update_2} alt="construction image" />
                            </div>
                            <div class="con_txt">
                                <p>We began laying out the <br /> foundations for our project ...</p>
                                <button class="w-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_a">
                <div class="box_tit_a">2019 - The City Walls</div>
                <div class="up_con_con">
                    <div class="left_line_a">
                    </div>
                    <div class="up_container">
                        <div class="con_content">
                            <div class="con_img">
                                <img src={update_3} alt="construction image" />
                            </div>
                            <div class="con_txt">
                                <p>The next phase we began <br /> creating the gate way ...</p>
                                <button class="w-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_a">
                <div class="box_tit_b">2021 - The Real Journey Begins</div>
                <div class="up_con_con">
                    <div class="left_line_b">
                    </div>
                    <div class="up_container">
                        <div class="con_content">
                            <div class="con_img">
                                <img src={update_4} alt="construction image" />
                            </div>
                            <div class="con_txt">
                                <p>After being delayed by the corona <br /> virus pandemic...</p>
                                <button class="w-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='up_case'>
            <Link to='/construction'><button class="b-btn">VIEW CONSTRUCTION UPDATES</button></Link>
            </div>
        </div>
    </>
     );
}
 
export default ConstructionUpdate;