import React from 'react';
import '../styles/form.css';
import AKHDesign from "../assets/form-icon.svg";

const ConfirmInPersonPayment = () => {
    return ( 
        <>
            <div class="con-holder-envelope">

            <div class="top">
                <img src={AKHDesign} alt="AKH Design" />
            </div>

            <div class="bottom">
                <p>We just sent <br /> all the details regarding <br /> to your email address</p>
                <div className='con_btn_box_w_b'>
                <button className='w-btn'>GO TO HOME</button>
                <button className='w-btn'>GO TO EMAIL</button>
            </div>
            </div>

            </div>
        </>
     );
}
 
export default ConfirmInPersonPayment;