import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../../Context/AuthContextProvider';
import logo from './../../../Assets/selfTutor_logo.png';

const Header = () => {
    const user = 'anik';
    const { theme, handleToggleTheme } = useContext(AuthContext);
    return (
        <div className='fw-bolder'>
            <Navbar collapseOnSelect expand="md" bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            src={logo}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                !user ?
                                    <Nav.Link href="#deets">Login</Nav.Link>
                                    :
                                    <>
                                        <Nav.Link href="#dets">LogOut</Nav.Link>
                                        <img
                                            alt="logo"
                                            src={logo}
                                            width="50"
                                            height="50"
                                            className="d-inline-block align-top rounded-circle mx-1"
                                        />
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <div className='d-flex justify-content-end align-items-center'>
                        <button className='mx-1 btn btn-primary' onClick={handleToggleTheme}>{theme == 'dark' ? 'Light' : 'Dark'}</button>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;