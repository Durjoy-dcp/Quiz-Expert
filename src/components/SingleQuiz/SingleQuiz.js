import React from 'react';
import './SingleQuiz.css'
import parse from 'html-react-parser';
const SingleQuiz = ({ que }) => {
    const { question, options, correctAnswer } = que;
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
        <div className='question m-5 text-center'>
            <h5 className='text-purple fw-bold'>{parse(question)}</h5>
        </div>
    );
};

export default SingleQuiz;