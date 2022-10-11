import React from 'react';
import { Col } from 'react-bootstrap';

const SingleOption = ({ option, id, idx }) => {
    return (
        <Col className='p-3 d-flex' sm={6}>

            <input className="form-check-input me-2" type="radio" name={id} id={id + idx} />
            <label className="  form-check-label" htmlFor={id + idx} >
                {option}
            </label>
        </Col>
    );
};

export default SingleOption;