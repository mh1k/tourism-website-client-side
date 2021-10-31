import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <Container className="my-5">
                <h1 className="details-title py-1 px-2">Contact</h1>
                <div className="row ">
                    <div className="col-12 col-md-6 mt-5">
                        <p>
                            <span className="fw-bold">Contact us</span><br />
                            HolidayEpress <br />
                            Gulshan, Dhaka <br />
                        </p>
                        <p><span className="fw-bold">Phone:</span> +23555666</p>
                        <p><span className="fw-bold">Email :</span> holiday@express.com</p>
                    </div>
                    <div className="col-12 col-md-6 mt-3 shadow-lg rounded p-5">
                        <p>If you have problems or any questions, please contact us using the form below:</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your First Name :</Form.Label>
                                <Form.Control className="mb-3" type="text" placeholder="first name" />
                                <Form.Label>Your Last Name :</Form.Label>
                                <Form.Control type="text" placeholder="last name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control type="email" placeholder="example@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Link to='/send'><Button className="view-btn btn text-light">Send message</Button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;