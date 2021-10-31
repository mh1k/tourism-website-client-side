import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div id="view-btn" className=" mt-5 view-btn  pt-5 pb-4">
            <Container>
                <Row>

                    <Col className="col-6 col-md-4">
                        <h3>Address</h3>
                        <p>Holiday Express <br />
                            Gulshan, Dhaka <br />
                            Phone : +23555666<br />
                            Email : holiday@express.com</p>

                    </Col>

                    <Col className="col-6 col-md-4 mb-3">
                        <Link className="text-decoration-none text-light footer-btn" to='/about'>About us</Link>
                        <br />
                        <Link className="text-decoration-none text-light footer-btn" to='/contact'>Contact us</Link>
                        <br />
                        <Link to='/terms' className="text-decoration-none text-light footer-btn" >Terms and Conditions</Link>
                        <br />
                        <Link to='/privacy' className="text-decoration-none text-light footer-btn">Privacy Policy</Link><br />
                        {/* <Nav.Link className="footer-btn p-0 text-light text-decoration-none" as={HashLink} to="/home#service">service</Nav.Link>
                        <Nav.Link className="footer-btn p-0 text-light text-decoration-none" as={HashLink} to="/home#healthpackage">Health package</Nav.Link>
                        <Nav.Link className="footer-btn p-0 text-light text-decoration-none" as={HashLink} to="#menubar">Back to top</Nav.Link> */}



                    </Col>

                    <Col className="col-12 text-center col-md-4  mb-3">
                        <h1>HolidayExpress</h1>
                    </Col>



                </Row>
                <p className="text-center">Copyright © 2021 holidayexpress.com</p>
            </Container>

        </div>
    );
};

export default Footer;