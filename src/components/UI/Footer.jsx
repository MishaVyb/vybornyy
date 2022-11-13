import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container className="justify-content-end mt-5">
      <Row className="justify-content-end">
        <Col md="auto">
          <p>© 2022 Misha Vybornyy | <a href='https://github.com/MishaVyb/vybornyy'>source</a></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer