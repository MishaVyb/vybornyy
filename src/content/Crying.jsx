import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import crying1 from '../media/images/crying1.jpg'
import crying2 from '../media/images/crying2.jpg'

const Crying = () => {
  const name = 'crying'
  const title = 'Сrying in the Dark | 2019'
  const subtitle = 'directed by Denis Danilov'
  const titlePosition = 'top-70 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={crying1}/>
      <ImageCol src={crying2}/>
    </FrameGroup>
  )
}

export default Crying