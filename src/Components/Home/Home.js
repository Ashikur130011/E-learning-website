import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, 
    faStoreAlt, 
    faBookReader, 
    faComment,
    faRegistered,
    faCashRegister,
    } from '@fortawesome/free-solid-svg-icons';
import { 
    FormControl, 
    InputGroup, 
    Form
   } from 'react-bootstrap';
import Subject from '../Subject/Subject';
import './Home.css'

   /*---------- Load-data ---------- */
const Home = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect( () =>
    {
        fetch('./education.json')
        .then(res => res.json())
        .then(data => setSubjects(data.slice(0,4)))
    },[])
    return (
        /*---------- Header-banner ---------- */
        <div className="home">
            <div className="home-container">
                <div className="p-5" style={{ width: '40%' }}>
                    <h1 className="fw-bold mb-4">Learn Advanced Online Courses To Grow Up</h1>
                    <h6 className="fw-bold mb-4">Online learning is not the next big thing, it is the now big thing and teaching in the Internet age means we must teach tomorrow's skills today.</h6>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="User E-mail"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button id="button-addon2">Sumbit</Button>
                    </InputGroup>
                </div>
                <div>
                    <img src="/hero-men.png" alt="" />
                </div>
            </div>

        {/*------------- Home subject-card ----------------*/}
            <div className="m-5 py-5">
            <Row xs={1} md={4} className="mb-4">
            {
                subjects.map(subject => <Subject Key={subject._id} subject={subject}></Subject>)
            } 
            </Row>
            </div>
            <div className="offer-section p-4 mx-5">

                {/*------------- Home Extra-option ----------------*/}
            <div style={{ width: '40%' }}>
                <h2 className="text-danger">Advantage of Learning-Tech</h2> 
                <div>
                    <ul>
                        <li>You can learn whatever you want!</li>
                        <li>This platform provide access to updated content.</li>
                        <li>Online courses look great on a resume.</li>
                        <li>Will save your time & money</li>
                        <li>Self-paced learning.</li>
                    </ul>
                    <h2 className="text-danger">Our Speciality</h2>
                    <p>You can pick the program of your dreams in traditional education, too, but that would involve traveling away from home, living in a completely unknown city, and struggling in an extremely competitive learning environment. The fact that online programs are cheaper when compared to the ones held in a traditional campus setting is enough to convince you to consider them. The average tuition for online courses depends on multiple factors, so it varies from one program to another.</p>
                </div>
            </div>
            <div className="special my-4 p-4">
                <h1 className="text-danger">Special Offer</h1>
                <div>
                    <div>
                        <img src="https://blog.thousandstar.net/wp-content/uploads/2021/07/image_1920-768x461.jpeg" alt="" />
                    </div>
                <div>
                    <h2 className="text-success">Javascript</h2>
                    <h5>Lesson: 35<span className="text-danger"> <FontAwesomeIcon icon={faBookReader}/></span></h5>
                    <div className="display-items fw-bold">
                        <p>Students: 356</p>
                        <p className="text-warning">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <span className="text-danger"> 4k+</span></p>
                    </div>
                    <Button className="mt-2 button" variant="success"><FontAwesomeIcon icon={faStoreAlt}/> Purchase</Button>
                </div>
                </div>
            </div>
                
            </div>
                {/* ----------- Home Form----------- */}
            <div className="form-container p-5 my-4">
                <div>
                    <h1 className="text-success p-4 mb-3">Add Your Comments <span className="text-warning"><FontAwesomeIcon icon={faComment} /></span></h1>
                    <div style={{ width: '80%' }} className="form p-4 bg-success pill ">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-white fw-bold'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-white fw-bold'>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="mt-2 button text-white fw-bold" variant="danger">Submit</Button>
                        </Form>
                    </div>
                </div>
                <div className="register-form p-4">
                    <h1 className="text-success p-4 mb-3">Register Here <span className="text-warning"><FontAwesomeIcon icon={faCashRegister} /></span></h1>
                    <Form>
                        <Form.Group>
                            <Row className="mb-4">
                            <Form.Label className=" fw-bold">Name</Form.Label>
                                <Col>
                                <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className=" fw-bold">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className=" fw-bold">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label className=" fw-bold">Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label className=" fw-bold">Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label className=" fw-bold">City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label className=" fw-bold">State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Washington</option>
                                <option>California</option>
                                <option>Texas</option>
                                <option>Florida</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label className=" fw-bold">Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="success fw-bold`" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
    </div>
        
        
    );
};

export default Home;