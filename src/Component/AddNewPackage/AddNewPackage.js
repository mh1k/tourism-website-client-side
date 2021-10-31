import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import './AddNewPackage.css'

const AddNewPackage = () => {
    const packagenameRef = useRef();
    const packageimgRef = useRef();
    const packagedurationRef = useRef();
    const packagepriceRef = useRef();
    const packagegatewayRef = useRef();
    const packagesummaryRef = useRef();

    const handleAddPackage = e => {
        e.preventDefault();
        const package_name = packagenameRef.current.value;
        const img = packageimgRef.current.value;
        const package_duration = packagedurationRef.current.value;
        const package_price = packagepriceRef.current.value;
        const package_gateway = packagegatewayRef.current.value;
        const package_summary = packagesummaryRef.current.value;
        const newPackage = { package_name, img, package_duration, package_price, package_gateway, package_summary }
        console.log(newPackage);
        fetch('https://frightening-village-49755.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Succssfully Added This Package")
                    // e.target.reset();
                    // console.log(data);
                }
            })
    }
    return (
        <div>
            <Container className="mt-5">
            <h2 className="details-title py-1 mt-5 px-3 mb-5" >Add New Package</h2>
                <Form onSubmit={handleAddPackage}>

                    <Form.Control size="lg" ref={packagenameRef} className="mb-3" required type="text" placeholder="Package name" />
                    <Form.Control size="lg" ref={packageimgRef} className="mb-3" required type="text" placeholder="Package img link" />
                    <Form.Control size="lg" ref={packagedurationRef} className="mb-3" required type="number" placeholder="Package days " />
                    <Form.Control size="lg" ref={packagepriceRef} className="mb-3" required type="number" placeholder="Package price" />
                    <Form.Control size="lg" ref={packagegatewayRef} className="mb-3" required type="text" placeholder="Gateway - Example - Dhaka to Uk" />
                    <Form.Control size="lg" ref={packagesummaryRef} className="mb-3" required as="textarea" placeholder="Package summary" />
                    
                    <Button variant="primary" className="booking-btn btn w-100" type="submit">
                        Add Package
                    </Button>
                </Form>
            </Container>

        </div>
    );
};

export default AddNewPackage;