import { faBed, faCamera, faPassport, faPlaneDeparture, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageAllBooking = () => {

    const planeIcon = <FontAwesomeIcon icon={faPlaneDeparture} />
    const bedIcon = <FontAwesomeIcon icon={faBed} />
    const visaIcon = <FontAwesomeIcon icon={faPassport} />
    const cameraIcon = <FontAwesomeIcon icon={faCamera} />
    const mealsIcon = <FontAwesomeIcon icon={faUtensils} />

    const [manageBooking, setManageBooking] = useState([])

    useEffect(() => {
        fetch(`https://frightening-village-49755.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setManageBooking(data))
    }, []);

    // console.log(manageBooking);

    const handleDeleteProduct = id => {

        const proceed = window.confirm("Are you sure, you want to cancel booking !!!")
        if (proceed) {
            const url = `https://frightening-village-49755.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert("booking cancel Successfully")
                        const remainingProducts = manageBooking.filter(product => product._id !== id);
                        setManageBooking(remainingProducts)
                    }
                })
        }
    }


    const approved = { status: "Approved" }

    const handleApprovedBooking = id => {
        const url = `https://frightening-village-49755.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approved)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Approved Succesfully")

                    window.location.reload();


                }

            })

    }


    return (
        <div>
            {<Container>
                <h2 className="details-title py-1 mt-5 px-3 mb-5" >Manage Booking</h2>
                {
                    !manageBooking.length ? <div style={{ marginBottom: "650px" }}></div> :
                        <Row className="row">
                            {
                                manageBooking?.map(booking => <Container key={booking._id}>
                                    <Col className="col-12 mb-3 px-0 booking">
                                        <Row>
                                            <Col className="col-12 col-md-4 ">
                                                <img className="booking-img img-fluid" src={booking?.bookingPackage?.img} alt="" />
                                            </Col>
                                            <Col className="col-12 col-md-8">
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="col-6">
                                                            <Card.Title className="mb-2">{booking.bookingPackage.package_name}</Card.Title>

                                                        </Col>
                                                        <Col className="col-6">
                                                            <p className="mb-0"><span>Status :</span> {booking.status}</p>
                                                            {/* <Card.Title>{booking.BookName}</Card.Title> */}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="col-6">
                                                            <Card.Title className="mb-2">{booking.BookName}</Card.Title>

                                                        </Col>
                                                        <Col className="col-6">
                                                            <p className="mb-0"><span>Person :</span> {booking.person}</p>
                                                            {/* <Card.Title>{booking.BookName}</Card.Title> */}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="col-12 col-md-6">
                                                            <p className="mb-0"><span>Tour Date :</span> {booking.tourDate}</p>
                                                            <p className="mb-0"><span>Package Price :</span> {booking.bookingPackage.package_price}$</p>
                                                            <p className="mb-0"><span>Tour Flight Depature : </span> {booking.bookingPackage.package_gateway}</p>
                                                        </Col>
                                                        <Col className="col-12  col-md-6">
                                                            <div className="feature-icon mt-2 d-flex justify-content-between  me-2">
                                                                <div className="d-flex me-2  flex-column text-center justify-content-center align-items-center">
                                                                    <span className="avialble-icon d-block py-2">{planeIcon}</span>
                                                                    <p className="mb-1">Flights</p>
                                                                </div>
                                                                <div className="d-flex me-2 flex-column text-center justify-content-center align-items-center">
                                                                    <span className="avialble-icon d-block py-2">{bedIcon}</span>
                                                                    <p className="mb-1">Hotels</p>
                                                                </div>
                                                                <div className="d-flex me-2 flex-column text-center justify-content-center align-items-center">
                                                                    <span className="avialble-icon d-block py-2">{cameraIcon}</span>
                                                                    <p className="mb-1">Sightseeing</p>
                                                                </div>
                                                                <div className="d-flex me-2 flex-column text-center justify-content-center align-items-center">
                                                                    <span className="avialble-icon d-block py-2">{visaIcon}</span>
                                                                    <p className="mb-1">Visa</p>
                                                                </div>
                                                                <div className="d-flex me-2 flex-column text-center justify-content-center align-items-center">
                                                                    <span className="avialble-icon d-block py-2">{mealsIcon}</span>
                                                                    <p className="mb-1">Meals</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="col-12 col-md-6">
                                                            <p className="mb-0"><span>Email :</span> {booking.userEmail}</p>
                                                            <p className="mb-0"><span>Address :</span> {booking.userAddress}</p>
                                                            <p className="mb-0"><span>Phone Number :</span> {booking.userPhoneNo}</p>

                                                        </Col>
                                                        <Col className="col-12 col-md-6 text-center align-self-end">
                                                            <button className="btn btn-success w-25 me-4 " onClick={() => handleApprovedBooking(booking._id)}>Approve</button>
                                                            <button className="btn btn-danger w-50 " onClick={() => handleDeleteProduct(booking._id)}>Cancel Booking</button>
                                                        </Col>
                                                    </Row>

                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Container>)
                            }
                        </Row>
                }
            </Container>}

        </div>
    );
};

export default ManageAllBooking;