import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark'>
      <Container className='text-light'>
        <Row>
          <Col lg={6} className='my-3'>
            <h5>Copyright © 2023 Puspa. All Rights Reserved.</h5>

          </Col>
          <Col lg={6} className='text-end my-3'>
            <h5>Terms & Policy</h5>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer
