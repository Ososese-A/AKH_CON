import '../styles/tour-box.css';

const TourBox = () => {
    return ( 
        <>
        <div className='con-holder-tour-box'>
        <h1 className='con-holder-title'>TOUR</h1>
        </div>

        <div class="b-bg-spread_a">
            <div class="schedule">
                <h2>VIRTUAL TOUR</h2>
                <p className='big-t'>Take a virtual tour of your would be new dream home. Immerse yourself in the <br />
                    design, layout, and ambiance without leaving your current location. Imagine <br />
                    virtually walking through each room, appreciating the details, and envisioning <br />
                    yourself living there. </p>
                <p className='small-t'>Take a virtual tour of your would be new dream <br />
                    home. Immerse yourself in the design, layout, and <br />
                    ambiance without leaving your current location. <br />
                    Imagine virtually walking through each room, <br />
                    appreciating the details, and envisioning yourself <br />
                    living there. </p>
                <button className='b-btn'>EXPOLORE VIRTUAL TOUR</button>
            </div>
        </div>
        </>
     );
}
 
export default TourBox;