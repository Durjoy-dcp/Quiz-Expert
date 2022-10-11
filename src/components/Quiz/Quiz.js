import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizDetails = useLoaderData();
    const { name, questions } = quizDetails.data;

    console.log(name, questions);
    return (
        <Container>
            <div className="text-center text-purple my-5">
                <h1 className='fw-bold'>Quiz of {name}</h1>
            </div>
            <div>
                {
                    questions.map(que => <SingleQuiz key={que.id} que={que}></SingleQuiz>)
                }
            </div>
        </Container>
    );
};

export default Quiz;