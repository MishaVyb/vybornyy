import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import parshuta1 from '../media/images/parshuta1.jpg'
import parshuta2 from '../media/images/parshuta2.jpg'

const Parshuta = () => {
  const name = 'parshuta'
  const title = 'Live performance by Julia Parshuta'
  const subtitle = 'directed by Evgeniy Karelinov'
  const titlePosition = 'top-70 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={parshuta1}/>
      <ImageCol src={parshuta2}/>
    </FrameGroup>
  )
}

export default Parshuta