import React from 'react';
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import QuizCard from '../QuizCard/QuizCard';
const Topics = () => {
    const apiData = useLoaderData();
    // console.log(apiData);
    const quizs = apiData.data;
    return (
        <Container>
            <h1 className='text-white fw-bold text-center'>Choose topic to play Quiz</h1>
            <Row className='my-5'>
                {
                    quizs.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }

            </Row>

        </Container>
    );
};

export default Topics;