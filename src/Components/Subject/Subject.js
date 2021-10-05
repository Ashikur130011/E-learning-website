import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt, 
        faStar, 
        faStoreAlt,
        faUserFriends, 
        faBookReader, 
        faMoneyBillAlt 
        } from '@fortawesome/free-solid-svg-icons';
import './Subject.css'

const Subject = (props) => {
    const{picture,lesson,subject,Students, Ratings, price} =props.subject;

    return (
        <div className="p-2">
            <Col>
                <Card className="fw-bold card-hover ">
                    <Card.Img className="card-img p-2" variant="top" src={picture} />
                    <Card.Body>
                    <div>
                    <Card.Title className="fw-bold">Subject: <span  className="text-success fw-bolder">{subject}</span></Card.Title>
                    </div>
                    <div className="display-items-2nd">
                    <Card.Text>Lesson: <span className="text-danger">{lesson} <FontAwesomeIcon icon={faBookReader}/></span></Card.Text>
                    <Card.Text>Students: <span className="text-danger">{Students} <FontAwesomeIcon icon={faUserFriends}/></span></Card.Text>
                    </div>
                    <div className="display-items">
                    <Card.Title className="text-warning"><FontAwesomeIcon icon={faMoneyBillAlt}/> <span className="text-danger">${price} </span></Card.Title>
                    <Card.Text className="text-warning"><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStarHalfAlt}/> <span className="text-danger">{Ratings}</span></Card.Text>
                    </div>
                    <Button className="mt-2 button" variant="success"><FontAwesomeIcon icon={faStoreAlt}/> Purchase</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Subject;