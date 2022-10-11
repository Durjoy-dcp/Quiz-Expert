import React from 'react';

const Header = () => {
    return (
        <div className='d-flex my-5 align-items-center'>
            <div className='p-5 m-5  w-50'>
                <h1 className='fs-1 fw-bold'>The online quiz maker that's <br /> easy to use, fun and <br /> fully free</h1>
            </div>
            <div className=' border m-5'>
                <img className='img-fluid' src="ssquiz.png" alt="" />
            </div>
        </div>
    );
};

export default Header;