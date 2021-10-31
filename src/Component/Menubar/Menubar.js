import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css';


const Menubar = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" id="menubar" bg="light" className=" view-btn" variant="light">
                <>
                    <Link className="py-3 ms-4 me-2 company-logo  h3 text-decoration-none " to="/"><img className="me-2 menubar-img img-fluid" src="https://i.ibb.co/kBGWgdM/New-Project.png" alt="" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Link className="text-decoration-none  ms-2 nav-link" to="/home">Home</Link>
                            <Link className="text-decoration-none  ms-2 nav-link" to="/about">About</Link>
                            <Link className="text-decoration-none  ms-2 nav-link" to="/contact">Contact</Link>

                        </Nav>
                        <Nav>
                            {
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                user.email ? <><Link className="text-decoration-none  ms-2 nav-link" to="/my_booking">My Booking</Link>
                                    <Link className="text-decoration-none  ms-2 nav-link" to="/manage_booking">Manage Booking</Link>
                                    <Link className="text-decoration-none  ms-2 nav-link" to="/add_package">Add New Package</Link><div className="d-flex align-items-center"><span className="me-3 ms-5 text-decoration-none user-name ">{user.displayName}</span><a className="text-decoration-none  text-light logout-btn me-4 " onClick={logOut}>Logout</a></div></>
                                    :
                                    <Link className="text-decoration-none login-btn me-4 text-light nav-link " to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </>
            </Navbar>
        </div>
    );
};

export default Menubar;