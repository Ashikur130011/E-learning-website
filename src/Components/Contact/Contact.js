import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact-container m-5">
                <div style={{ width: '50%' }}>
                    <h4 className="text-primary mb-5">HOW CAN WE HELP YOU?</h4>
                    <h2>Tell us a little about what you are interested in, and we’ll be in touch right away.</h2>
                    <h5 className="my-5">Are you a student or parent in need to technical assistance? Please email <span className="text-primary">example@kajeet.com</span> or call 1-240-482-4635 (8:30am – 6:00pm ET) for help</h5>
                    <Form style={{ width: '80%' }} className="contact-form p-3 mx-auto">
                    <Form>
                        <Row className="mb-4">
                        <Form.Label className=" fw-bold">Name</Form.Label>
                            <Col>
                            <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fw-bold">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Label className='fw-bold'>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Add your message"  rows={3} />
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="fw-bold" type="checkbox" label="Check me out" />
                        </Form.Group>
                        
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div style={{ width: '40%' }}>
                    <h1 className="text-primary"><FontAwesomeIcon icon={faAddressCard}/> Headquarters</h1>
                    <h4>Washington, United State</h4>
                    <br />
                    <h2>Sales and Technical Support
(8:30am – 6:00pm ET):</h2>
                    <h5 className="mt-5">Main Line: <span className="text-primary m-3"> 866-4KAJEET</span></h5>
                    <h5>Support: <span className="text-primary">1-240-482-4636</span></h5>
                    <h5>For Sales Inquiries: <span className="text-primary">sales@kajeet.net</span></h5>
                    <h5>For Press Inquiries: <span className="text-primary">pr@kajeet.com</span></h5>
                    <h5>For Customer Support: <span className="text-primary">educare@kajeet.com</span></h5>
                    <h5>For General Inquiries: <span className="text-primary">care@kajeet.com</span></h5>

                </div>
            </div>
        </div>
    );
};

export default Contact;