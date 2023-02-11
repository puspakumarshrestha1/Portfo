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
          <p> Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <Button className='border-0 py-2 px-4'>Hire Me</Button>
          </Col>
          
        </Row>
      </Container>

    </div>
  )
}

export default WhatIdo
