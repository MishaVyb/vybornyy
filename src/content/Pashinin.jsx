import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import pashinin1 from '../media/images/pashinin1.jpg'
import pashinin2 from '../media/images/pashinin2.jpg'

const Pashinin = () => {
  const name = 'pashinin'
  const title = 'PASHININ'
  const subtitle = 'directed by Evgeniy Karelinov'
  const titlePosition = 'top-70 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={pashinin1}/>
      <ImageCol src={pashinin2}/>
    </FrameGroup>
  )
}

export default Pashinin