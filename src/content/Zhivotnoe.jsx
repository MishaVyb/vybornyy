import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import zhivotnoe1 from '../media/images/zhivotnoe1.jpg'
import zhivotnoe2 from '../media/images/zhivotnoe2.jpg'

const Zhivotnoe = () => {
  const name = 'zhivotnoe'
  const title = 'Arsenij the Baptist \'Zhivotnoe\''
  const subtitle = 'directed by Kirill Proskurin'
  const titlePosition = 'top-0 start-43'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={zhivotnoe1}/>
      <ImageCol src={zhivotnoe2}/>
    </FrameGroup>
  )
}

export default Zhivotnoe