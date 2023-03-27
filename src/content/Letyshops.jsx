import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import letyshops1 from '../media/images/letyshops1.jpg'
import letyshops2 from '../media/images/letyshops2.jpg'

const Letyshops = () => {
  const name = 'letyshops'
  const title = 'Letyshops x labelcom'
  const subtitle = 'directed by Pavel Kling'
  const titlePosition = 'top-10 start-94'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={letyshops1}/>
      <ImageCol src={letyshops2}/>
    </FrameGroup>
  )
}

export default Letyshops