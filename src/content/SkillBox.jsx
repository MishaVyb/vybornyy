import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import skillbox1 from '../media/images/skillbox1.jpg'
import skillbox2 from '../media/images/skillbox2.jpg'

const SkillBox = () => {
  const name = 'skillbox'
  const title = 'SkillBox x labelcom'
  const subtitle = 'directed by Stas Ilchenko'
  const titlePosition = 'top-20 start-84'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={skillbox1}/>
      <ImageCol src={skillbox2}/>
    </FrameGroup>
  )
}

export default SkillBox