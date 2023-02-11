import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'

function Skills() {
    const now1 = 90;
    const now2 = 90;
    const now3 = 70;
    const now4 = 80;
    return (
        <div id='skill' className='skill my-5'>
            <Container className='py-5'>
                <Row>

                    <Col lg={6} className='skill-text'>
                        <h5><span>Design is Life</span></h5>
                        <h3>I Develop Skills Regularly to Keep Me Update</h3>
                        <p className='py-4'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                        <div>
                        <p className='py-4'>Figma</p>
                        <ProgressBar triped variant="success" animated now={75} />
                        <p className='py-4'>HTML</p>
                        <ProgressBar triped variant="warning" animated now={85} />
                        <p className='py-4'>CSS</p>
                        <ProgressBar triped variant="info" animated now={80} />
                        <p className='py-4'>JavaScript</p>
                        <ProgressBar triped variant="danger" animated now={65} />
                        <p className='py-4'>React</p>
                        <ProgressBar triped variant="dark" animated now={75} />
                        </div>
                       
                    </Col>
                    <Col lg={6}>
                        <img className='w-100' src='https://itemsstore.net/tailwind/dizmi/assets/img/skills/1.jpg' alt='' />

                    </Col>
                </Row>
                {/* <Row>
                    <Col lg={6} className='py-3'>
                        <h6>HTML</h6>
                        <ProgressBar>
                            <ProgressBar className='' now={now1} label={`${now1}%`} striped variant="success" key={1} />
                        </ProgressBar>
                    </Col>
                    <Col lg={6} className='py-3'>
                        <h6>CSS</h6>
                        <ProgressBar>
                            <ProgressBar className='text-dark' now={now2} label={`${now2}%`} striped variant="warning" key={1} />
                        </ProgressBar>
                    </Col>
                </Row>
                <Row>
                <Col lg={6} className='py-3'>
                        <h6>JavaScript</h6>
                        <ProgressBar>
                            <ProgressBar now={now3} label={`${now3}%`} striped variant="danger" key={1} />
                        </ProgressBar>
                    </Col>
                    <Col lg={6} className='py-3'>
                        <h6>React</h6>
                        <ProgressBar>
                            <ProgressBar  className='text-dark' now={now4} label={`${now4}%`} striped variant="info" key={1} />
                        </ProgressBar>
                    </Col>
                </Row> */}
            </Container>

        </div>
    )
}

export default Skills
