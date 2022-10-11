import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='my-5'>
            <Container className="text-center">
                <h1 className='fw-bold display-1 text-info '> Oops !</h1>
                <h3 className='fw-bold display-1 text-warning '>Page Not Found </h3>
                <Link to='/'><button className='btn btn-info'> Go to Home</button></Link>
            </Container>
        </div>
    );
};

export default ErrorPage;