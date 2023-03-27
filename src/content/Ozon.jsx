import React from 'react'
import { Row } from 'react-bootstrap'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import ozon1 from '../media/images/ozon1.jpg'
import ozon2 from '../media/images/ozon2.jpg'
import ozon3 from '../media/images/ozon3.jpg'
import ozon4 from '../media/images/ozon4.jpg'

const Ozon = () => {
  const name = 'ozon'
  const title = 'Ozon Express'
  const subtitle = 'dericted by Polina Varfolomeeva'
  const titlePosition = 'top-20 start-80'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <Row>
        <ImageCol src={ozon1}/>
      </Row>
      <Row>
        <ImageCol src={ozon2}/>
        <ImageCol src={ozon4}/>
        <ImageCol src={ozon3}/>
      </Row>
    </FrameGroup>
  )
}

export default Ozon