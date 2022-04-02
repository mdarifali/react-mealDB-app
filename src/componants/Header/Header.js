import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="warning" expand="lg" className='p-3'>
            <Container>
                <Navbar.Brand href="/">Fake MealDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <nav className='nav-bar'>
                            <Link to="/home">Home</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/food-category">Category</Link>
                            <Link to="/">About</Link>
                    </nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;