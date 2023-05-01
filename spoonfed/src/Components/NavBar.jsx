import React from 'react';
import styles from '../Styles/NavBar.css';
import Home from './Home';
import AccProfile from './AccProfile';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <><Navbar expand="lg" sticky='top' variant='light'>
            <Container>
                <Navbar.Brand href="/home">SpoonFed</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/AccProfile">Profile</Nav.Link>
                        <Nav.Link href="/login">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></>
        
     
    );
}

export default NavBar;