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
                <h1 className='fw-bold'>Quiz of <span className='text-info'>{name}</span> </h1>
            </div>
            <div>
                {
                    questions.map((que, idx) => <SingleQuiz key={que.id} idx={idx} que={que}></SingleQuiz>)
                }
            </div>
        </Container>
    );
};

export default Quiz;