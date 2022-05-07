import React from 'react';
import './Login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //----------------------------------------------------//

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //-------------signInWithEmailAndPassword--------------//
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
 /* ----------------------------------------\
                 handle-signInWithGoogle
----------------------------------------------- */
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
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
        <div className='container w-75 my-5'>
            <div className='form'>
                <h2 className=" py-3 text-center">Login</h2>
                <hr className='h-line' />
                <form onSubmit={handleLogin} className='pb-4'>
                    <div>
                        <div>
                            <input type='text' name='email' id='email' placeholder='Email' autoComplete='off' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type='password' name='password' id='password' placeholder='Password' autoComplete='off' />
                        </div>
                    </div>
                    {errorMessage}
                    <div className='mx-auto d-flex justify-content-between align-items-center py-2 submit-section'>
                        <button type='submit' className='px-4 py-2 my-2 form-submit fs-6'>Login</button>
                        <span className='signup fs-4 ' onClick={() => navigate("/signup")}>Sign up here <AiOutlineArrowRight /></span>
                    </div>
                    <span className='signup fs-4'>Forget Password?</span>
                    <div className='horizontal-divider d-flex justify-content-center'>
                        <hr className='w-25 text-white' />
                        <p className='px-3 pt-1'>or</p>
                        <hr className='w-25 text-white' />
                    </div>
                    <div className='mx-auto' onClick={() => signInWithGoogle()}>
                        <p className="fs-4"><FcGoogle className='mb-1' /> <span className='signup'>Continue with Google </span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;