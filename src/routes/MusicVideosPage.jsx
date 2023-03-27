import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Bicycle from '../content/Bicycle'
import CtrlBand from '../content/CtrlBand'
import LusKinder from '../content/LusKinder'
import Parshuta from '../content/Parshuta'
import Princes from '../content/Princes'
import Truck from '../content/Truck'
import Zhivotnoe from '../content/Zhivotnoe'

class MusicVideosPage extends Component {
  render() {
    return (
      <Container
        className="w-75"
      >
        <Bicycle/>
        <Zhivotnoe />
        <Parshuta />
        <LusKinder/>
        <Princes />
        <CtrlBand />


      </Container>
    )
  }
}

export default MusicVideosPage