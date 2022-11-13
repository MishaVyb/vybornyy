import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import luskinder1 from '../media/images/luskinder1.jpg'
import luskinder2 from '../media/images/luskinder2.jpg'
import luskinder3 from '../media/images/luskinder3.jpg'

const LusKinder = () => {
  const name = 'luskinder'
  const title = 'Lus Kinder \'I`m talking to a tree\''
  const subtitle = 'dericted by Vlad Haidurov'
  const titlePosition = 'top-70 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol md={6} src={luskinder1}/>
      <ImageCol src={luskinder2}/>
      <ImageCol src={luskinder3}/>
    </FrameGroup>
  )
}

export default LusKinder