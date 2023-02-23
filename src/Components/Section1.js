import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img1 from "../img/1.jpg"

function Section1() {
    return (
        <>
            <Container id='home'>
                <Row>
                    <Col lg={6} className='m-auto  banner-text'>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1>Hi, I am <span>Puspa Kumar Shrestha</span></h1>
                        <div className='banner'>
                            <div className='ani-text'>
                                <h1><span>a</span></h1>
                                <div className='dynamic-text'>
                                    <ul>
                                        <li><h1><span>Web Designer</span></h1></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className='py-4'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <h6 className='py-3'><span>Find Me On</span></h6>
                                    <div className='d-flex'>
                                    <p><i class="bi bi-facebook text-primary pe-3"></i></p>
                                    <p> <i class="bi bi-github pe-3"></i></p>
                                    <p> <i class="bi bi-instagram pe-3 text-danger"></i></p>
                                    </div>
                                    
                                
                                </Col>
                                <Col lg={6}>
                                <Button className='border-0 py-3 px-5 rounded-pill my-4'>Hire Me</Button>
                                
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={6} className='text-center'>
                        <img className='banner-img py-5 w-100' src={img1} alt='' />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Section1
