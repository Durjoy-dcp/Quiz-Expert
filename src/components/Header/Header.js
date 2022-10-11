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
                            <h1 className='text-purple p-3  display-3 fw-bold'>The online quiz maker that's <br /> easy to use, fun and  fully free</h1>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>


                        <div className=' border m-3 w-100 '>

                            <Carousel variant="dark" className="carousel ">
                                <Carousel.Item>
                                    <img
                                        className="d-block  img-fluid"
                                        src="ssquiz1.png"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block img-fluid"
                                        src="ssquiz2.png"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block  img-fluid"
                                        src="ssquiz3.png"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
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