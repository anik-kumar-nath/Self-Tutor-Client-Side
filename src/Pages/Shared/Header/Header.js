import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContextProvider';
import logo from './../../../Assets/selfTutor_logo.png';

const Header = () => {
    const { theme, handleToggleTheme, user, logOut } = useContext(AuthContext);
    const ClassName = `border border-${theme === 'dark' ? 'light' : 'dark'} border-2 opacity-50`;

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='fw-bolder'>
            <Navbar collapseOnSelect expand="md" bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href="#home" className='d-flex'>
                        <img
                            alt="logo"
                            src={logo}
                            width="100"
                            height="50"
                            className="d-inline-block align-top me-1"
                        />
                        <strong>Self Tutor</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="#features"><Link to={'/'} className='btn btn-success fw-bold'>Courses</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to={'/faq'} className='btn btn-success fw-bold'>FAQ</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to={'/blog'} className='btn btn-success fw-bold'>Blog</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                !user?.uid ?
                                    <Nav.Link href="#deets" ><Link className='btn btn-success fw-bold' to={'/login'}>Login</Link></Nav.Link>
                                    :
                                    <>
                                        <Nav.Link href="#dets"><Link className='btn btn-success fw-bold' onClick={handleLogOut}>LogOut</Link></Nav.Link>
                                        <OverlayTrigger
                                            key='bottom'
                                            placement='bottom'
                                            overlay={
                                                <Tooltip id={`tooltip-bottom`}>
                                                    <strong>{user?.displayName}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <img
                                                alt="logo"
                                                src={user?.photoURL}
                                                width="50"
                                                height="50"
                                                className="d-inline-block align-top rounded-circle m-1"
                                            />
                                        </OverlayTrigger>
                                    </>
                            }
                        </Nav>
                        <button className='m-1 btn btn-primary' onClick={handleToggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <hr className={ClassName}></hr>
        </div >
    );
};

export default Header;