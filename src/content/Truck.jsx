import React from 'react'
import { Col } from 'react-bootstrap'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import truck1 from '../media/images/truck1-with-reward.jpg'
import truck2 from '../media/images/truck2.jpg'
import truck3 from '../media/images/truck3.jpg'
import truck4 from '../media/images/truck4.jpg'

const Truck = () => {
  const name = 'truck'
  const title = 'He Pulls His Truck | 2018'
  const subtitle = 'dericted by Kirill Proskurin'
  const titlePosition = 'top-70 start-67'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol md={12} src={truck1}/>
      <ImageCol src={truck2}/>
      <ImageCol src={truck3}/>
      <Col></Col>
    </FrameGroup>
  )
}

export default Truck