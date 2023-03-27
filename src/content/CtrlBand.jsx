import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import ctrlband1 from '../media/images/ctrlband1.jpg'
import ctrlband2 from '../media/images/ctrlband2.jpg'

const CtrlBand = () => {
  const name = 'ctrlband'
  const title = 'CTRL BAND \'Foreign Children\''
  const subtitle = 'directed by Kirill Proskurin'
  const titlePosition = 'top-4 start-44'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={ctrlband1}/>
      <ImageCol src={ctrlband2}/>
    </FrameGroup>
  )
}

export default CtrlBand