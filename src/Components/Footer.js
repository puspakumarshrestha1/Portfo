import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark'>
      <Container className='text-light'>
        <Row>
          <Col  className='my-3 text-center'>
            <h5>Contact Me If You Want to Hire me</h5>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer
