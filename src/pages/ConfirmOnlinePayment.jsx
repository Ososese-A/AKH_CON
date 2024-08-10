import React from 'react';
import '../styles/form.css';
import AKHDesign from "../assets/form-icon.svg";

function ConfirmOnlinePayment() {
    return (
        <>
        <div class="con-holder-envelope">

        <div class="con-holder-title">
            <h1>ONLINE PAYMENT</h1>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>The next page is <br /> the online payment page, <br /> would you like to proceed?</p>
            <div className='con_btn_box_w_b'>
                <button className='b-btn'>PROCEED</button>
                <button className='w-btn'>TO EMAIL</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmOnlinePayment;