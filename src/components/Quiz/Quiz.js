import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizDetails = useLoaderData();
    const { name, questions } = quizDetails.data;

    console.log(name, questions);
    return (
        <div>
            <h1>This is a quiz </h1>
        </div>
    );
};

export default Quiz;