import React from 'react'
import { Row } from 'react-bootstrap'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import oneandsix1 from '../media/images/oneandsix1.jpg'
import oneandsix2 from '../media/images/oneandsix2.jpg'
import oneandsix3 from '../media/images/oneandsix3.jpg'
import oneandsix4 from '../media/images/oneandsix4.jpg'

const OneAndSix = () => {
  const name = 'oneandsix'
  const title = '1.6 | 2019'
  const subtitle = 'directed by Kirrill Proskurin'
  const titlePosition = 'top-25 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <Row className="justify-content-start">
        <ImageCol md={6} src={oneandsix1}/>
      </Row>
      <Row>
        <ImageCol src={oneandsix2}/>
        <ImageCol src={oneandsix3}/>
        <ImageCol src={oneandsix4}/>
      </Row>
    </FrameGroup>
  )
}

export default OneAndSix