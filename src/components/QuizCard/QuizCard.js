import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './QuizCard.css'
const QuizCard = ({ quiz }) => {
    const { logo, name, total } = quiz;

    return (
        <Col sm={12} md={3}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} className="bg-purple" />
                <Card.Body className="text-purple">
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <div>
                        <p>Total Questions : {total}</p>
                        <Button className='bg-purple-dark border-0' variant="primary">Start Practice</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuizCard;