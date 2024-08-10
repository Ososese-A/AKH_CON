import React from 'react';
import '../styles/form.css';
import AKHDesign from "../assets/form-icon.svg";

function ConfirmSignUp() {
    return (
        <>
        <div class="big">

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>We just sent an email <br /> to confirm your sign up</p>
            <div className='con_btn_box_w_b'>
                <button className='w-btn'>GO TO HOME</button>
                <button className='w-btn'>GO TO EMAIL</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmSignUp;