import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';

const Header = () => {
    return (

        <div>
            <Container fluid className="my-2 p-4">

                <Row className="align-items-center justify-content-center px-2">
                    <Col sm={12} md={6}>
                        <div className='text-center'>
                            <h1 className='text-purple p-3  display-4 fw-bold'>The  <span className='display-3 text-warning fw-bold' >Quiz Expert</span>   <br />it is easy to use,  <br />fun and  fully free</h1>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>


                        <div className=' border border-2 rounded shadow-lg border-danger m-3 w-100 '>

                            <Carousel variant="dark" className="carousel ">
                                <Carousel.Item>
                                    <img
                                        className="d-block  img-fluid"
                                        src="ssquiz1.png"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=' fw-bold bg-danger'>You can Explore Quiz</h3>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block img-fluid"
                                        src="ssquiz2.png"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption >

                                        <h3 className=' fw-bold bg-danger'>Every Quiz Have Cool Feature</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block  img-fluid"
                                        src="ssquiz3.png"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className=' fw-bold bg-danger'>Explore Analytical Data</h3>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block  img-fluid"
                                        src="ssquiz4.png"
                                        alt="Four slide"
                                    />

                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block  img-fluid"
                                        src="ssquiz5.png"
                                        alt="Five slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className=' fw-bold bg-danger'>Explore some FAQ </h3>


                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </Col>



                </Row>




            </Container>

        </div>

    );
};

export default Header;