import React from 'react';
import { AiFillFacebook, AiFillYoutube, AiOutlineContacts, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className='bg-dark py-2'>
            <div className='mx-5 row'>
                <div className='col-12 col-md-4'>
                    <h3>SOCIAL</h3>
                    <h3>
                        <a href="https://www.facebook.com/"><AiFillFacebook className='m-1 rounded' /></a>
                        <a href="https://www.youtube.com/"><AiFillYoutube className='m-1' /></a>
                    </h3>
                </div>
                <div className='col-12 col-md-4'>
                    <h3>THE COMPANY</h3>
                    <div className=''>
                        <Link className='fs-5 text-white text-decoration-none' as={Link} to="home"><span className='nav'>Home</span></Link>
                        <Link className='fs-5 text-white text-decoration-none' as={Link} to="bloge"><span className='nav'>Bloge</span></Link>
                        <Link className='fs-5 text-white text-decoration-none' as={Link} to="manageInventorys"><span className='nav'>Manage</span></Link>
                        <Link className='fs-5 text-white text-decoration-none' as={Link} to="additems"><span className='nav'>Add-Items</span></Link>
                        <Link className='fs-5 text-white text-decoration-none' as={Link} to="myitems"><span className='nav'>My-Items</span></Link>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                <h3>CORPORATE OFFICE</h3>
                    <h4><AiOutlineContacts /> Contact us</h4>
                    <p>15 Shewrapara,</p>
                    <p>Rokeya Sarani, Mirpur,</p>
                    <p><AiOutlinePhone /> +94578123</p>
                    <p><AiOutlineMail /> official: realfurniture102@gmail.com</p>
                </div>
            </div>

            <div className='text-center pt-3'>
                <p className='fs-5'><small>copy right &copy; {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;