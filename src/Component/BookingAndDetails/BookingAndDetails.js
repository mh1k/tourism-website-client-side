import Button from '@restart/ui/esm/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCamera, faPassport, faPlaneDeparture, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './BookingAndDetails.css'

const BookingAndDetails = () => {
    const [packag, setPackage] = useState({});
    const { package_id } = useParams();
    // console.log(packag);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://frightening-village-49755.herokuapp.com/packages/${package_id}`)
            .then(res => res.json())
            .then(data => setPackage(data))
    }, []);

    const planeIcon = <FontAwesomeIcon icon={faPlaneDeparture} />
    const bedIcon = <FontAwesomeIcon icon={faBed} />
    const visaIcon = <FontAwesomeIcon icon={faPassport} />
    const cameraIcon = <FontAwesomeIcon icon={faCamera} />
    const mealsIcon = <FontAwesomeIcon icon={faUtensils} />

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const passportRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();
    const personRef = useRef();

    const handleBooking = e => {
        e.preventDefault();
        const userName = nameRef.current.value;
        const address = addressRef.current.value;
        const cityName = cityRef.current.value;
        const passportNo = passportRef.current.value;
        const phoneNumber = phoneRef.current.value;
        const packagedate = dateRef.current.value;
        const packageperson = personRef.current.value;

        const newBooking = {
            BookName: userName,
            userAddress: address,
            userCity: cityName,
            userPassportNo: passportNo,
            userEmail: user.email,
            status: "Pending",
            tourDate: packagedate,
            userPhoneNo: phoneNumber,
            person: packageperson,
            bookingPackage: packag
        }
        // console.log(newBooking);

        fetch('https://frightening-village-49755.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Succssfully Book This Package")
                    e.target.reset();
                    // console.log(data);
                }
            })

    }
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row className="g-4" xs={1} md={2}>
                    <Col className="p-3 col-md-7">
                        <h2 className="details-title py-1 px-2">{packag.package_name}</h2>
                        <div className="text-center mb-4">
                            <img className="details-img" src={packag.img} alt="" />
                        </div>
                        <Row className="fw-bold">
                            <Col>
                                <p>Package Price : {packag.package_price} $ (per person)</p>
                            </Col>
                            <Col>
                                <p className="text-end">Tour Time : {packag.package_duration} Days</p>
                            </Col>
                        </Row>
                        <h4 className="mb-3">Our Facility Management</h4>
                        <div className="feature-icon mt-2 d-flex justify-content-between">
                            <div className="d-flex flex-column text-center justify-content-center align-items-center">
                                <span className="avialble-icon d-block py-2">{planeIcon}</span>
                                <p>Flights</p>
                            </div>
                            <div className="d-flex flex-column text-center justify-content-center align-items-center">
                                <span className="avialble-icon d-block py-2">{bedIcon}</span>
                                <p>Hotels</p>
                            </div>
                            <div className="d-flex flex-column text-center justify-content-center align-items-center">
                                <span className="avialble-icon d-block py-2">{cameraIcon}</span>
                                <p>Sightseeing</p>
                            </div>
                            <div className="d-flex flex-column text-center justify-content-center align-items-center">
                                <span className="avialble-icon d-block py-2">{visaIcon}</span>
                                <p>Visa</p>
                            </div>
                            <div className="d-flex flex-column text-center justify-content-center align-items-center">
                                <span className="avialble-icon d-block py-2">{mealsIcon}</span>
                                <p>Meals</p>
                            </div>
                        </div>

                        <div className="text-align">
                            <p >{packag.package_summary}</p>
                        </div>
                    </Col>
                    <Col className="p-3 col-md-5">

                        <h2 className="mb-4 details-title py-1 px-2">Booking Information</h2>
                        <Form onSubmit={handleBooking}>

                            <Form.Control size="lg" ref={nameRef} className="mb-3" required type="text" placeholder="Enter your full Name" />
                            <Form.Control size="lg" className="mb-3" readOnly type="email" value={user.email} placeholder="Enter email" />
                            <Form.Control size="lg" required ref={addressRef} className="mb-3" type="text" placeholder="Address" />
                            <Form.Control size="lg" required ref={cityRef} className="mb-3" type="text" placeholder="City" />
                            <Form.Control size="lg" required ref={dateRef} className="mb-3" type="date" />
                            <Form.Control size="lg" ref={passportRef} className="mb-3" type="text" placeholder="Passport Number" />
                            <Form.Control size="lg" ref={personRef} required className="mb-3" type="number" placeholder="How many Person" />
                            <Form.Control size="lg" required ref={phoneRef} className="mb-3" type="number" placeholder="Phone number" />
                            <Button variant="primary" className="booking-btn btn w-100" type="submit">
                                Submit
                            </Button>

                        </Form>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default BookingAndDetails;