import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
             <Navbar className='Navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fs-3'>Inventore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='fs-6 text-white' as={Link} to="home"><span className='nav'>Home</span></Nav.Link>
                            <Nav.Link className='fs-6 text-white' as={Link} to="blog"><span className='nav'>Blog</span></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='fs-5 text-white'><span className='login'>Login</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;