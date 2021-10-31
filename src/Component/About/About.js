import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <Container>
                <h2 className="details-title py-1 mt-5 px-3 mb-5">About Holiday Express</h2>

                <p>Holiday Express, the world's largest travel package booking platform*, helps hundreds of millions of people each month** become better travelers, from planning to booking to taking a trip. Travelers across the globe use the Holiday Express site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. With more than 934 million reviews and opinions of nearly 8 million businesses, travelers turn to Holiday Express to find deals on accommodations, book experiences, reserve tables at delicious restaurants and discover great places nearby. As a travel guidance company available in 43 markets and 22 languages, Holiday Express makes planning easy no matter the trip type.The subsidiaries of Holiday Express, Inc.</p>

                <div className="mt-4 mb-4">
                    <h5>Why choose us?</h5>
                    <ul>
                        <li>Terrific range of cottages, lodges and cabins</li>
                        <li>Pay only 30% deposit (unless your stay is within 8 weeks)</li>
                        <li>Our prices include all fees and charges - no nasty surprises!</li>
                        <li>All our properties have been checked by us (unlike Airbnb!)</li>
                        <li>Log in to your account and pay your final balance when convenient</li>
                    </ul>
                </div>

                <Row>
                    <Col className="col-12 col-md-4">
                        <h4>VISITOR EXPERIENCE</h4>
                        <p>Michael Paul has a real understanding, as do the property owners who list with him, that all holiday guests want to have a "good experience", whatever that specifically means to them.</p>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <h4>COULD IT BE EASIER?</h4>
                        <p>The guest wants security of booking, certainty of information and a travel agent in the middle who understands the guest's needs, while the resort owner wants to be delivered guests who are well informed and know they have come to the right place when they drive through the gate, making Michael Paul Holidays' approach to booking is absolutely ideal for all parties.</p>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <h4>WHERE TO FROM HERE?</h4>
                        <p>It's Holiday Express plan to keep discovering special places in Britain and to keep seeking out resort operators in those areas who match the brand's promise to deliver exceptional customer service to the guest and create an unforgettable holiday experience.</p>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default About;