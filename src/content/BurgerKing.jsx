import React from 'react'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import burgerking1 from '../media/images/burgerking1.jpg'
import burgerking2 from '../media/images/burgerking2.jpg'

const BurgerKing = () => {
  const name = 'burgerking'
  const title = 'Burger King'
  const subtitle = 'directed by Ivan Plechev'
  const titlePosition = 'top-20 start-99'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <ImageCol src={burgerking1}/>
      <ImageCol src={burgerking2}/>
    </FrameGroup>
  )
}

export default BurgerKing