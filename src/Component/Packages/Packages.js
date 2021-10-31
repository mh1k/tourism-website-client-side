import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCamera, faPassport, faPlaneDeparture, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packages.css'

const Packages = () => {

    const planeIcon = <FontAwesomeIcon icon={faPlaneDeparture} />
    const bedIcon = <FontAwesomeIcon icon={faBed} />
    const visaIcon = <FontAwesomeIcon icon={faPassport} />
    const cameraIcon = <FontAwesomeIcon icon={faCamera} />
    const mealsIcon = <FontAwesomeIcon icon={faUtensils} />

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch("https://frightening-village-49755.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    console.log(packages);
    return (
        <div className="mb-5">
            <h2 className="text-center mt-5 company-logo mb-4">International Holiday Tour Package</h2>
            {
                !packages.length ? <div className="text-center mt-5"><Spinner className="text-center" animation="border" variant="secondary" /></div> : <Container className="mt-5">

                    <Row xs={1} md={3} className="g-4">
                        {
                            packages.map(packag => <Col key={packag._id}>
                                <Card className="packageCard package-card h-100">
                                    <Card.Img className="card-img" variant="top" src={packag.img} />
                                    <Card.Body className="d-flex flex-column">
                                        <Row>
                                            <Col className="col-6">
                                                <Card.Title className="pakage-title ">{packag.package_name}</Card.Title>
                                            </Col>
                                            <Col className="col-6">
                                            <h5 className="text-end">{packag.package_price} $</h5>
                                            </Col>
                                        </Row>
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
                                        {/* <p className="text-bold">package Price : {packag.price} BDT</p> */}
                                        <Card.Text>
                                            {packag.package_summary.slice(0, 120)}...
                                        </Card.Text>
                                        <div className="mt-auto ">
                                            <Link to={`/package/booking_details/${packag._id}`}><button className="btn w-100 booking-btn">Booking Now</button></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>

                </Container>
            }
        </div>
    );
};

export default Packages;