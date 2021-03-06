import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../../images/logo192.png';
import './Header.css';
import PageTitle from '../PageTitle/PageTitle';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar className='nav-bar' collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <PageTitle title='Home'></PageTitle>
                <Container>
                    <Navbar.Brand className='nav-brand' as={Link} to="/home"><img className='nav-logo' src={logo} alt="" />ALLEN<span className='nav-text'>CORP</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Developer</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;