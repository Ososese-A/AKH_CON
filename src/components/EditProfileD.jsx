import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/form.css';
import AKHDesign from "../assets/form-icon.svg";

const EditProfileFormD = () => {
    const schema = yup.object().shape({
        securityQuest: yup.string().required("Please enter a Security Question"),
        securityAns: yup.string().required("Please enter an answer to the security question"),
    })

    const  { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return ( 
        <>
    <div class="con-holder-envelope">
        <div className="con-holder-title">
            <h1>EDIT PROFILE</h1>
        </div>
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label for="securityQuest">Security Question: </label>
                    <textarea name="securityQuest" id="securityQuest" cols="30" rows="5"    {...register('securityQuest')} />
                    <p>{errors.securityQuest?.message}</p>
                </div>

                <div className="form-group">
                    <label for="securityAns">Security Answer: </label>
                    <input type="text" name="securityAns" id="securityAns" {...register('securityAns')}/>
                    <p>{errors.securityAns?.message}</p>
                </div>

                <div className='con_btn_box_w_b'>
                <button type='submit' className="b-btn">DONE</button>
                <button type='submit' className="w-btn">NEXT</button>
                </div>
            </form>
        </div>
    </div>
        </>
     );
}
 
export default EditProfileFormD;