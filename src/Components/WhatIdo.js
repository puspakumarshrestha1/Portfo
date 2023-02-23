import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function WhatIdo() {
  return (
    <div id='whatido'>
      <Container>
        <Row>
          <Col lg={6} >
            <img className='w-100' src='https://itemsstore.net/tailwind/dizmi/assets/img/about/1.jpg' alt='' />
          </Col>
          <Col lg={6} className='what-text ps-5'>
          <h5><span>I'm a Designer</span> </h5>
          <h3> I Can Design Anything You Want</h3>
          <p> I can Design anything that you want in a website and according to your design</p>
          <Button className='border-0 py-2 px-4'>Hire Me</Button>
          </Col>
          
        </Row>
      </Container>

    </div>
  )
}

export default WhatIdo
