import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fs-3'>Inventore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='fs-6 text-white' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className='fs-6 text-white' as={Link} to="blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='fs-5 text-white px-4'><span className='login'>Login</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;