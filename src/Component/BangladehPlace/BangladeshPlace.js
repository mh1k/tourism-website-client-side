import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const BangladeshPlace = () => {

    const [banglaplace, setBanglaplace] = useState([]);

    useEffect(() => {
        fetch("https://frightening-village-49755.herokuapp.com/banglaplace")
            .then(res => res.json())
            .then(data => setBanglaplace(data))
    }, []);

    return (
        <div>
            <Container className="mt-5">

                <h2 className="text-center mb-5 company-logo">Sightseeing in Bangladesh</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        banglaplace.map(place => <Col key={place._id}>
                            <Card className="img-container">
                                <img className="place-img img-fluid" src={place.img} alt="" />
                                <h2 className="bottom-left">{place.place_Name}</h2>
                            </Card>
                        </Col>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default BangladeshPlace;