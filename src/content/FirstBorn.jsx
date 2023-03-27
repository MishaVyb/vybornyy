import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import firstborn1 from '../media/images/firstborn1.jpg'
import firstborn2 from '../media/images/firstborn2.jpg'


const FirstBorn = () => {
  const name = 'firstborn'
  const title = 'Firstborn | 2019'
  const subtitle = 'directed by Ilia Kuvshinov'
  const titlePosition = 'top-4 start-54'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={firstborn1}/>
      <ImageCol src={firstborn2}/>
    </FrameGroup>
  )
}

export default FirstBorn