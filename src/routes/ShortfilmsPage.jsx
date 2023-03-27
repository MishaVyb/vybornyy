import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import VideoFrame from '../components/VideoFrame'
import Crying from '../content/Crying'
import FirstBorn from '../content/FirstBorn'
import OneAndSix from '../content/OneAndSix'
import PostDisco from '../content/PostDisco'
import Truck from '../content/Truck'

class ShortfilmsPage extends Component {
  render() {
    return (
      <Container className="w-75">
        <Truck />
        <PostDisco />
        <FirstBorn />
        <OneAndSix />
        <Crying />
      </Container>
    )
  }
}

export default ShortfilmsPage
