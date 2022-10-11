import React from 'react';

const Header = () => {
    return (
        <div className='d-md-flex p-2 m-5 my-5 align-items-center justify-content-center'>
            <div className=''>
                <h1 className='text-purple p-3  fs-1 fw-bold'>The online quiz maker that's <br /> easy to use, fun and <br /> fully free</h1>
            </div>
            <div className=' border m-3'>
                <img className='img-fluid' src="ssquiz.png" alt="" />
            </div>
        </div>
    );
};

export default Header;