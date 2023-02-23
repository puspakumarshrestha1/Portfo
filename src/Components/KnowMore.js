import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function KnowMore() {
    return (
        <>
        <div id='aboutme'  className='know my-5'>
            <Container  className='text-center '>
                <Row>
                    <Col >
                        <h1 className='info-text py-5'>Know Me More</h1>
                    </Col>
                </Row>
                <Row>
                    <Col  lg={8} className='text-start py-5'>
                        <h3>I'm <span>Puspa Kumar Shrestha</span>, a Web Developer</h3>
                        <p className='py-3'> Hello, I am Puspa Kumar Shrestha. I want to start a career as a Front-end/Web Designer.</p>
                        <p>I can help you create a beautiful responsive and creative websites</p>
                    </Col>
                    <Col lg={4} className='text-start py-5 px-5'>
                        <h6>Name: Puspa Kumar Shrestha</h6><hr/>
                        <h6>Email: <span>simonmaharjan2@gmail.com</span></h6><hr/>
                        <h6>Age: 20</h6><hr/>
                        <h6>From: Kapan, Chabahil</h6><hr/>
                    



                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default KnowMore
