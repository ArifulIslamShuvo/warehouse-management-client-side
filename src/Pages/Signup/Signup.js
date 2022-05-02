import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

    //------------Email-handle-----------------//

    const handleEmail = (emailInput) => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        }
        else {
            setEmail({ value: "", error: "Invalid email" });
        }
    }
    //--------------handlePassword-------------//

    const handlePassword = (passwordInput) => {
        if (passwordInput.length < 6) {
            setPassword({ value: '', error: "password min 6 character" });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    }
    //----------------handleConfirmPassword--------------//
    const handleConfirmPassword = (confirmPasswordInput) => {
        if (confirmPasswordInput === password.value) {
            setConfirmPassword({ value: confirmPasswordInput, error: "" });
        }
        else {
            setConfirmPassword({ value: "", error: "Password Mismatched" });
        }
    }


    return (
        <div className='container w-75 max-auto my-5'>
            <div className='form'>
                <h2 className=" py-3 text-center">Sign up</h2>
                <hr className='h-line' />
                <form className='pb-4'>
                    <div>
                        <div>
                            <input type='text' name='name' id='name' placeholder='Name' autoComplete='off' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input onBlur={(event) => handleEmail(event.target.value)} type='text' name='email' id='email' placeholder='Email' autoComplete='off' />
                        </div>
                        {
                            email?.error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2px' }}>{email.error}</p>
                        }
                    </div>
                    <div>
                        <div>
                            <input onBlur={(event) => handlePassword(event.target.value)} type='password' name='password' id='password' placeholder='Password' autoComplete='off' />
                        </div>
                        {
                            password?.error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2px' }}>{password.error}</p>
                        }
                    </div>
                    <div>
                        <div>
                            <input onBlur={(event) => handleConfirmPassword(event.target.value)} type='password' name='confirmPassword' id='confirm-password' placeholder='Confirm-password' autoComplete='off' />
                        </div>
                        {
                            confirmPassword?.error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2px' }}>{confirmPassword.error}</p>
                        }
                    </div>
                    {/* ----------------- */}
                    <div className='mx-auto d-flex justify-content-between align-items-center py-2 submit-section'>
                        <button type='submit' className='px-4 py-2 my-2 form-submit fs-6'>Sign up</button>
                        <span className='signup fs-4 ' onClick={() => navigate("/login")}>Login here <AiOutlineArrowRight /></span>
                    </div>
                    <span className='signup fs-4'>Forget Password?</span>
                    <div className='horizontal-divider d-flex justify-content-center'>
                        <hr className='w-25 text-white' />
                        <p className='px-3 pt-1'>or</p>
                        <hr className='w-25 text-white' />
                    </div>
                    <div className='mx-auto'>
                        <p className="fs-4"><FcGoogle className='mb-1' /> <span className='signup'>Continue with Google </span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;