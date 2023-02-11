import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function KnowMore() {
    return (
        <>
        <div id='aboutme' className='know my-5'>
            <Container className='text-center '>
                <Row>
                    <Col >
                        <h1 className='info-text py-5'>Know Me More</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className='text-start py-5'>
                        <h3>I'm <span>Puspa Kumar Shrestha</span>, a Web Developer</h3>
                        <p className='py-3'> I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p> Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
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
