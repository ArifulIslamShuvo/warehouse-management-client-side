import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle, FcOk } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import toast from 'react-hot-toast';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

    //--------------------handlr-useCreateUserWithEmailAndPassword--------------//
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


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
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    //-----------------handle-signInWithGoogle------------------------

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || user1) {
        navigate('/home');
    }

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    let errorMessage;
    if (error1 || error) {
        errorMessage = <div>
            <p className="text-danger">Error: {error1.message}</p>
        </div>
        console.log(errorMessage);
    }

    return (
        <div className='container w-75 max-auto my-5'>
            <div className='form'>
                <h2 className=" py-3 text-center">Sign up</h2>
                <hr className='h-line' />
                <form onSubmit={handleRegister} className='pb-4'>
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
                    {errorMessage}
                    <div className='mx-auto d-flex justify-content-between align-items-center py-2 submit-section'>
                        <button type='submit' className='px-4 py-2 my-2 form-submit fs-6'>Sign up</button>
                        <span className='signup fs-4 ' onClick={() => navigate("/login")}>Login here <AiOutlineArrowRight /></span>
                    </div>
                    <div className='horizontal-divider d-flex justify-content-center'>
                        <hr className='w-25 text-white' />
                        <p className='px-3 pt-1'>or</p>
                        <hr className='w-25 text-white' />
                    </div>
                    <div className='mx-auto'>
                        <p className="fs-4" onClick={() => signInWithGoogle()}><FcGoogle className='mb-1' /> <span className='signup'>Continue with Google </span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;