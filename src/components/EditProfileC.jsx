import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/form.css';
import AKHDesign from "../assets/form-icon.svg";


function EditProfileFormC() {
    
    const schema = yup.object().shape({
       
        password : yup.string()
        .required("Please enter your password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/,
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
        confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Please confirm your password"),
        securityQuestion: yup.string().required("Please select security question"),

    })

    const  { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
        <div className='con-holder-envelope'>

        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="password">Password: </label>
                    <input type="password" name="password" id="password" {...register('password')}/>
                    <p>{errors.password?.message}</p>
                </div>
                <div className="form-group">
                    <label for="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" {...register('confirmPassword')}/>
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                           
                <div className='con_btn_box_w_b'>
                <button type='submit' className="b-btn">DONE</button>
                <button type='submit' className="w-btn">NEXT</button>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}

export default EditProfileFormC;