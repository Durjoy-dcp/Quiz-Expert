import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleOption.css';

const SingleOption = ({ option, id, idx }) => {
    return (
        <Col className='p-3 d-flex' sm={6}>

            <input className="form-check-input me-2 hideradio" type="radio" name={id} id={id + idx} />
            <label className="option p-3 text-purple form-check-label w-100 text-center" htmlFor={id + idx} >
                {option}
            </label>
        </Col>
    );
};

export default SingleOption;