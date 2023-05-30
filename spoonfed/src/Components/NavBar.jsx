import React from 'react';
import styles from '../Styles/NavBar.css';
import Home from './Home';
import AccProfile from './AccProfile';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home" style={{backgroundColor: "#A7B7BD", color: "white"}}>
        <Nav.Item>
          <Nav.Link href="/home">SpoonFed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/AccProfile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Logout</Nav.Link>
        </Nav.Item>
      </Nav>
        </>
    );
}

export default NavBar;