import React from 'react';
import '../styles/form.css';
import AKHDesign from "../assets/form-icon.svg";

const PaymentInterim = () => {
    return ( 
        <>
        <div class="con-holder-envelope">

        <div class="con-holder-title">
            <h1>PAYMENT</h1>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>How would you like to <br /> make this payment?</p>
            <div className='con_btn_box_w_b'>
                <button className="b-btn">&nbsp;&nbsp;&nbsp;ONLINE&nbsp;&nbsp;&nbsp;</button>
                <button className="w-btn">IN PERSON</button>
            </div>
        </div>
        
    </div>
        </>
     );
}
 
export default PaymentInterim;