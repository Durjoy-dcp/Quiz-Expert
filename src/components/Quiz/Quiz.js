import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizDetails = useLoaderData();
    const { name, questions } = quizDetails.data;
    const [noOfCorrect, setNoOfCorrect] = useState([]);
    const [noOfWrong, setNoOfWrong] = useState([]);


    console.log(name, questions);
    return (
        <Container>
            <Row>

                <Col sm={12} md={4} className="order-sm-1 order-md-2">
                    <div className='rounded bg-warning my-5 p-5 text-center position-fixed d-none d-md-block top-50 '>

                        <h4 className=' fw-bold '> Correct answered = {noOfCorrect.length} <br />Wrong answered={noOfWrong.length}</h4>
                    </div>
                    <div className='rounded bg-warning my-5 p-5 text-center d-md-none d-block'>

                        <h4 className=' fw-bold '> Correct answered = {noOfCorrect.length} <br />Wrong answered={noOfWrong.length}</h4>
                    </div>

                </Col>
                <Col sm={12} md={8} className="order-sm-2 order-md-1">


                    <div className="text-center text-purple my-5 ">
                        <h1 className='fw-bold'>Quiz of <span className='text-info'>{name}</span> </h1>
                    </div>
                    <div>
                        {
                            questions.map((que, idx) => <SingleQuiz noOfCorrect={noOfCorrect} noOfWrong={noOfWrong} setNoOfCorrect={setNoOfCorrect} setNoOfWrong={setNoOfWrong} key={que.id} idx={idx} que={que}></SingleQuiz>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Quiz;