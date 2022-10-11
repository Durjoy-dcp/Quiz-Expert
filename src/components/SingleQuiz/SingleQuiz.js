import React, { useEffect, useState } from 'react';
import './SingleQuiz.css'
import parse from 'html-react-parser';
import { Col, Container, Row } from 'react-bootstrap';
import SingleOption from '../SingleOption/SingleOption';
const SingleQuiz = ({ que, idx }) => {
    const { question, options, correctAnswer, id } = que;
    let modifiedQuestion = question;
    if (modifiedQuestion.startsWith('<p>')) {
        modifiedQuestion = modifiedQuestion.substring(3);

    }
    if (modifiedQuestion.endsWith('</p>')) {
        modifiedQuestion = modifiedQuestion.substring(0, modifiedQuestion.length - 4);
        // console.log(modifiedQuestion);
    }

    const handleToGivenAns = (value) => {
        if (value === correctAnswer) {
            alert("Ans is correct");
        } else {
            alert("Ans is wrong ");
        }

    }

    const parse = require('html-react-parser');
    return (
        <div className='question m-5 p-4'>



            <div className='  text-center '>
                <h5 className='text-purple fw-bolder p-3 '>Quiz {idx + 1}:{parse(question)}</h5>
            </div>
            <div className='Options'>
                <Container>
                    <Row>
                        {
                            options.map((option, idx) => <SingleOption handleToGivenAns={handleToGivenAns} key={idx} idx={idx} option={option} id={id} ></SingleOption>)
                        }
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default SingleQuiz;