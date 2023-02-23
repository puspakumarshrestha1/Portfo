import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Contact() {
    return (
        <div id='contact' className='contact py-5'>
            <Container className='py-5'>
                <Row>
                    <Col lg={3} className='text-light address py-5'>
                        <h5> ADDRESS</h5>
                        <h6>Kapan, Chabahil</h6>
                        <h6>Saraswatinagar.</h6>
                        <h6><i class="bi bi-phone text-danger"></i> 9862790177</h6>
                        <h6> <i class="bi bi-envelope-at-fill text-danger"></i> simonmaharjan2@gmail.com</h6>
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col lg={6} className=''>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" placeholder="977 9862791077" pattern="[0-9]+" />
                                    <label htmlFor="floatingInput">Your Number</label>
                                </div>
                            </Col>
                            <Col lg={6} className=''>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Name" />
                                    <label htmlFor="floatingPassword">Name</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Subject" />
                                    <label htmlFor="floatingPassword">Subject</label>
                                    </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                                    <label htmlFor="floatingTextarea2">Comments</label>
                                </div>
                                <Button className='my-4 text-light'  variant="dark">Send Message</Button>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >

        </div >
    )
}

export default Contact
