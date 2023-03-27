import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import princes1 from '../media/images/princes1.jpg'
import princes2 from '../media/images/princes2.jpg'


const Princes = () => {
  const name = 'princes'
  const title = 'Princes \'Little Prince\''
  const subtitle = 'dericted by Vlad Haidurov'
  const titlePosition = 'top-7 start-87'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={princes1}/>
      <ImageCol src={princes2}/>
    </FrameGroup>
  )
}

export default Princes