import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { FormControl, InputGroup} from 'react-bootstrap';
import Subject from '../Subject/Subject';
import './Home.css'

const Home = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect( () =>
    {
        fetch('./education.json')
        .then(res => res.json())
        .then(data => setSubjects(data.slice(0,3)))
    },[])
    return (
        <div>
            <div className="home-container">
           <div className="home-text">
           <h1>Learn Advanced Online Courses To Grow Up</h1>
            <h6>Online learning is not the next big thing, it is the now big thing and teaching in the Internet age means we must teach tomorrow's skills today.</h6>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button
                variant="outline-secondary" id="button-addon2">
                Button
                </Button>
            </InputGroup>
           </div>
           <div className="home-img">
               <img src="/hero-men.png" alt="" />
           </div>
        </div>

        <div className="Subject-container">
        <Row xs={1} md={3} className="g-4 mb-4">
           {
               subjects.map(subject => <Subject Key={subject._id} subject={subject}></Subject>)
           } 
           </Row>
        </div>
        <div className="offer-section">
        <div className="Text">
            <h2><span>Advantage of Learning-Tech</span></h2> 
            <div>
                <ul>
                    <li>You can learn whatever you want!</li>
                    <li>Comfort</li>
                    <li>Online courses look great on a resume.</li>
                    <li>Lower costs.</li>
                    <li>Self-paced learning.</li>
                </ul>
                <h2><span>Our Speciality</span></h2>
                <p>You can pick the program of your dreams in traditional education, too, but that would involve traveling away from home, living in a completely unknown city, and struggling in an extremely competitive learning environment. The fact that online programs are cheaper when compared to the ones held in a traditional campus setting is enough to convince you to consider them. The average tuition for online courses depends on multiple factors, so it varies from one program to another.</p>
            </div>
        </div>
            <div>
            <h1><span>Special Offer</span></h1>
            <div className="special">
            <div>
                <img src="https://blog.thousandstar.net/wp-content/uploads/2021/07/image_1920-768x461.jpeg" alt="" />
            </div>
            <div>
                <h2>Javascript</h2>
                <h4>Lesson: 35</h4>
                <div className="display-items">
                    <div>
                    <p>Students: 156</p>
                    </div>
                    <div>
                        <p>Ratings: 4k+</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
        </div>
        </div>
        
    );
};

export default Home;