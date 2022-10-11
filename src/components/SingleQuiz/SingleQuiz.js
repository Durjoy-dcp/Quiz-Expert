import React from 'react';
import './SingleQuiz.css'
import parse from 'html-react-parser';
import { Col, Container, Row } from 'react-bootstrap';
import SingleOption from '../SingleOption/SingleOption';
const SingleQuiz = ({ que }) => {
    const { question, options, correctAnswer, id } = que;
    let modifiedQuestion = question;
    if (modifiedQuestion.startsWith('<p>')) {
        modifiedQuestion = modifiedQuestion.substring(3);

    }
    if (modifiedQuestion.endsWith('</p>')) {
        modifiedQuestion = modifiedQuestion.substring(0, modifiedQuestion.length - 4);
        console.log(modifiedQuestion);
    }

    const parse = require('html-react-parser');
    return (
        <div className='question m-5 p-4'>



            <div className='  text-center '>
                <h5 className='text-purple '>{parse(question)}</h5>
            </div>
            <div className='Options'>
                <Container>
                    <Row>
                        {
                            options.map((option, idx) => <SingleOption key={idx} idx={idx} option={option} id={id} ></SingleOption>)
                        }

                    </Row>

                </Container>

            </div>
        </div>
    );
};

export default SingleQuiz;