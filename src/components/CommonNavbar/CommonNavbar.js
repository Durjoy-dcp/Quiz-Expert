import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const CommonNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className='fw-bold'>
            <Container>
                <Navbar.Brand> <Link to="/" className='navbar-brand'>Quiz Expert</Link></Navbar.Brand>
                <Nav className="ms-auto">
                    <Link className='nav-link' to="/" >Home</Link>
                    <Link className='nav-link' to="/topics" >Topics</Link>
                    <Link className='nav-link' to="/statistics">Statistics</Link>
                    <Link className='nav-link' to="/blog">Blog</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default CommonNavbar;