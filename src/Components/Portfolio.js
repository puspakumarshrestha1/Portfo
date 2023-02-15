import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Portfolio() {
  return (
    <>
    <Container id='portfolio' className='py-5 works'>
        <Row>
            <Col className='text-center'>
            <h5><span>Portfolio</span></h5>
            <h3>My Amazing Works</h3>
            <p>Most common methods for designing websites that work well on <br/>desktop is responsive and adaptive design</p>
            </Col>
        </Row>
        <Row className='pro1 py-3 text-center'>
            <Col lg={6}>
            <h6 className='py-4'><span>Luxury Hotel</span></h6>
            <p>Simple Design of  a Luxury Hotel website.</p>
            <p>Built using HTML, CSS, JavaScript, React.</p>
            <a href='https://sachin1144.github.io/LuxHotel/' target={'_blank'}><h5><span>Visit Website </span> <i class="bi bi-box-arrow-up-right text-danger"></i></h5></a>
            </Col>
            <Col lg={6}>
            <h6 className='py-4'><span>E-commerce</span></h6>
            <p>Simple Design of  a E-commerce website.</p>
            <p>Built using HTML, CSS, JavaScript, React.</p>
            <a href='https://sachin1144.github.io/E-commerce/' target={'_blank'}><h5><span>Visit Website </span> <i class="bi bi-box-arrow-up-right text-danger"></i></h5></a>
            </Col>
        </Row>
        <Row className='pro1 py-3 text-center'>
            <Col lg={6}>
            <h6 className='py-4'><span>News Portal</span></h6>
            <p>Simple Design of  a News Portal website.</p>
            <p>Built using HTML, CSS, JavaScript, React.</p>
            <a href='https://sachin1144.github.io/News/' target={'_blank'}><h5><span>Visit Website </span> <i class="bi bi-box-arrow-up-right text-danger"></i></h5></a>
            </Col>
            <Col lg={6}>
            <h6 className='py-4'><span>Travel-Blog</span></h6>
            <p>Simple Design of  a Travel-Blog website.</p>
            <p>Built using HTML, CSS, JavaScript, React.</p>
            <a href='https://sachin1144.github.io/Travel-Blog/' target={'_blank'}><h5><span>Visit Website </span> <i class="bi bi-box-arrow-up-right text-danger"></i></h5></a>
            </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default Portfolio
