import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './CustomeNavBar.css';

class CustomeNavBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><Image src="/image/exonlab.svg" alt="logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/solutions" to="/solutions">
                            Solutions
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/devices" to="/devices">
                            Devices
                        </NavItem>
                        <NavItem>Sign Up</NavItem>
                        <NavItem>Login</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomeNavBar;
