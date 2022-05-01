import React from 'react';
import './Login.css'
import GoogleLogo from "../../../src/images/Google.png"

const Login = () => {
    return (
        <div className='container w-75 max-auto my-5'>
            <div className='form'>
                <h2 className=" py-3 text-center">Login</h2>
                <hr className='h-line'/>
                <form className='pb-5'>
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
                    <div className='mx-auto d-flex justify-content-between align-items-center py-2 submit-section'>
                        <button type='submit' className='px-4 py-2 my-2 form-submit fs-6'>Login</button>
                        <span className='signup fs-4 '>Sign up here</span>
                    </div>
                    <span className='signup fs-4'>Forget Password?</span>
                    <div className='horizontal-divider d-flex justify-content-center'>
                        <hr className='w-25 text-white' />
                        <p className='px-3 pt-1'>or</p>
                        <hr className='w-25 text-white' />
                    </div>
                    <div className='mx-auto d-flex justify-content-center align-items-center signup mr-5'>
                        <div><img className='w-75' src={GoogleLogo} alt='' /></div>
                        <p className="mt-3"> Continue with Google </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;