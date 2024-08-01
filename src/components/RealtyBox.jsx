import { Link } from 'react-router-dom';
import realty_preview from '../assets/realty-preview.png';
import '../styles/realty-box.css';

const RealtyBox = () => {
    return ( 
        <>
    <div className="con-holder r-big">
    <div class="reality">
        <h1 className='con-holder-title'>REALTY</h1>
        <div class="flex">
            <div class="content">
                
                
                <div className='con-tent'>
                <div className='content-title-box'>
                <p className='content-title'>4 BEDROOM TERRACE HOUSE</p>
                <hr className='room-hr' />
                </div>

                <div class="rooms">
                    <div class="lists">
                        <div class="list-l">
                            <ul>
                            <li>Spacious</li>
                            <li>Home Automation</li>
                            <li>Pre wired AC</li>
                            </ul>
                        </div>
                        <div class="list-r">
                            <ul>
                            <li>Maid room</li>
                            <li>Dedicated laundry space</li>
                            <li>Home security</li>
                            </ul>
                        </div>
                    </div>
                    <div class="warn">
                        <p>
                            All houses are delivered without <br />
                            internal furnishing
                        </p>
                        <hr className='room-hr' />
                    </div>
                </div>

                </div>
                    <div>
                        <button className='r-btn'>I'M INTERESTED</button>
                    </div>
            </div>
            
            <div className='img-con'>
            <img class="img" src={realty_preview} />
            </div>
        </div>
    </div>
    </div>

    <div className="con-holder r-small">
    <div class="reality">
        <h1 className='realty-push con-holder-title'>REALTY</h1>
        <div class="flexin">
            <div class="contentin">
                
                
                <div className='con-tent'>
                <div className='content-title-box'>
                <div className='con-top'>
                    <p className='content-title'>4 BEDROOM TERRACE HOUSE</p>
                    <hr className='room-hr' />
                </div>
                </div>

                <div class="rooms">
                    <div class="listsin">
                        <div class="list-lin">
                            <ul>
                            <li>Spacious</li>
                            <li>Home Automation</li>
                            <li>Pre wired AC</li>
                            </ul>
                        </div>
                        <div class="list-rin">
                            <ul>
                            <li>Maid room</li>
                            <li>Laundry space</li>
                            <li>Home security</li>
                            </ul>
                        </div>
                    </div>
                    <div class="warnin">
                        <p>
                            All houses are delivered without <br />
                            internal furnishing
                        </p>
                    </div>
                </div>

                <div className='btnin'>
                    <hr className='room-hr' />
                    <Link to=''><button className='rin-btn'>I'M INTERESTED</button></Link>
                </div>

                </div>

                
            </div>
            
            <div className='img-conin'>
            <img class="img" src={realty_preview} />
            </div>
        </div>
    </div>
    </div>
        </>
     );
}
 
export default RealtyBox;