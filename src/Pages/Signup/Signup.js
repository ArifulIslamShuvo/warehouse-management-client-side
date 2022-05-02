import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


const Signup = () => {
    const navigate = useNavigate();
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
                            <input type='text' name='email' id='email' placeholder='Email' autoComplete='off' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type='password' name='password' id='password' placeholder='Password' autoComplete='off' />
                        </div>
                    </div>
                    <div>
                        <input type='password' name='confirmPassword' id='confirm-password' placeholder='Confirm-password' autoComplete='off'/>
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
                        <p className="fs-4"><FcGoogle className='mb-1'/> <span className='signup'>Continue with Google </span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;