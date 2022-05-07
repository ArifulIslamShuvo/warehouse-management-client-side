import React from 'react';
import { AiFillFacebook, AiFillYoutube, AiOutlineContacts, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className='bg-dark pt-2'>
            <div className='container d-flex align-aitems-center justify-content-between'>
                <div>
                    <h3>Social</h3>
                    <h2>
                        <a href="https://www.facebook.com/"><AiFillFacebook className='m-1 rounded' /></a>
                        <a href="https://www.youtube.com/"><AiFillYoutube className='m-1' /></a>
                    </h2>
                </div>
                <div className='mt-2'>
                    <h4><AiOutlineContacts /> Contact us</h4>
                    <p><AiOutlinePhone /> +94578123</p>
                    <p><AiOutlineMail /> official: realfurniture102@gmail.com</p>
                </div>
            </div>
            <div className='text-center '>
                <p className='fs-5'><small>copy right &copy; {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;