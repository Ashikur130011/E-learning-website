import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Subject.css'

const Subject = (props) => {
    const{picture,lesson,subject,Students, Ratings, price} =props.subject;
    return (
        <div>
    <Col>
      <Card className="card-body">
        <Card.Img className="card-img" variant="top" src={picture} />
        <Card.Body>
          <div>
          <Card.Title>{subject}</Card.Title>
          </div>
          <div className="display-items-2nd">
          <Card.Text>Lesson: {lesson}</Card.Text>
          <Card.Text>Students: {Students}</Card.Text>
          </div>
          <div className="display-items">
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>Ratings: {Ratings}</Card.Text>
          </div>
          <Button className="mt-2" variant="success">Purchase</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Subject;