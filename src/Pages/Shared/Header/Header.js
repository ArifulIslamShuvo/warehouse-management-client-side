import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import { AiOutlineLogin } from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    //-----------handled sign out-----------//
    const logout = () => {
        signOut(auth);
    };
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fs-3'>
                        <div className='mt-4'>
                            <h2 className='real'>REAL</h2>
                            <p className='furniture'>FURNITURE</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='fs-5 text-white' as={Link} to="home"><span className='nav'>Home</span></Nav.Link>
                            <Nav.Link className='fs-5 text-white' as={Link} to="bloge"><span className='nav'>Bloge</span></Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='fs-5 text-white' as={Link} to="manageInventorys"><span className='nav'>Manage</span></Nav.Link>
                                    <Nav.Link className='fs-5 text-white' as={Link} to="additems"><span className='nav'>Add-Items</span></Nav.Link>
                                    <Nav.Link className='fs-5 text-white' as={Link} to="myitems"><span className='nav'>My-Items</span></Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>{
                            !user ?
                                <Nav.Link as={Link} to="login" className='fs-5 text-white'><span className='login'>Login <AiOutlineLogin /></span></Nav.Link>
                                :
                                <Nav.Link as={Link} to="login" className='fs-5 text-white'><span className='login' onClick={logout}>Logout <AiOutlineLogin /></span></Nav.Link>

                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;