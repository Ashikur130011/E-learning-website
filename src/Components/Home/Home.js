import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
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
        <div className="m-5">
        <Row xs={1} md={4} className="g-4 mb-4">
           {
               subjects.map(subject => <Subject Key={subject._id} subject={subject}></Subject>)
           } 
           </Row>
        </div>
        <div className="offer-section mx-5">

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
        <div>
            <h1 className="text-danger">Special Offer</h1>
            <div className="special">
                <div>
                    <img src="https://blog.thousandstar.net/wp-content/uploads/2021/07/image_1920-768x461.jpeg" alt="" />
                </div>
            <div>
                <h2>Javascript</h2>
                <h5>Lesson: 35</h5>
                <div className="display-items mx-5 fw-bold">
                    <p>Students: 356</p>
                    <p>Ratings: 4k+</p>
                </div>
            </div>
            </div>
        </div>
            
        </div>
                {/* ----------- Home Form----------- */}
        <div className="pb-4">
            <h1 className="text-success mt-4">Add Your Comments</h1>
            <div style={{ width: '60%' }} className="form mx-auto p-4 bg-success pill ">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-info fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='text-info fw-bold'>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="mt-2 button text-white fw-bold" variant="danger">Submit</Button>
                </Form>
            </div>
        </div>
        </div>
        
        
    );
};

export default Home;