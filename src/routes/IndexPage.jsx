import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import VideoFrame from '../components/VideoFrame'
import Bicycle from '../content/Bicycle'

import LusKinder from '../content/LusKinder'
import Ozon from '../content/Ozon'
import Truck from '../content/Truck'



const IndexPage = () => {
  return (
    <Container
      className="w-75"
    >
      <Row>
        <Col><VideoFrame name={'showreel'}/></Col>
      </Row>
      <LusKinder/>
      <Truck/>
      <Bicycle/>
      <Ozon/>
    </Container>
  )
}

export default IndexPage