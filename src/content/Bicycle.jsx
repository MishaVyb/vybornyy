import React from 'react'

import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import bicycle1 from '../media/images/bicycle1.png'
import bicycle2 from '../media/images/bicycle2.png'
import bicycle3 from '../media/images/bicycle5.png'

const Bicycle = () => {
  const name = 'bicycle'
  const title = 'Doch x Naik Borzov \'Bicycle\''
  const subtitle = 'dericted by Polina Varfolomeeva'
  const titlePosition = 'top-70 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol md={6} src={bicycle1}/>
      <ImageCol src={bicycle2}/>
      <ImageCol src={bicycle3}/>
    </FrameGroup>
  )

}

export default Bicycle
