import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Subject from '../Subject/Subject';
import { Button, Row } from 'react-bootstrap';

const Services = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect( () =>
    {
        fetch('./education.json')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[])
    return (
        <div>
            <h2>Our Services</h2>
            <div className="Subject-container">
        <Row xs={1} md={3} className="g-4 mb-4">
           {
               subjects.map(subject => <Subject Key={subject._id} subject={subject}></Subject>)
           } 
           </Row>
        </div>
        </div>
    );
};

export default Services;