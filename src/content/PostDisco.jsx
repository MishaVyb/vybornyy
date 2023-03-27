import React from 'react'
import { Row } from 'react-bootstrap'
import FrameGroup from '../components/FrameGroup'
import ImageCol from '../components/ImageCol'

import postdisco1 from '../media/images/postdisco1.jpg'
import postdisco2 from '../media/images/postdisco2.jpg'
import postdisco3 from '../media/images/postdisco3.jpg'
import postdisco4 from '../media/images/postdisco4.jpg'

const PostDisco = () => {
  const name = 'postdisco'
  const title = 'POST DISCO | 2021'
  const subtitle = 'directed by Pavel Zelenkov'
  const titlePosition = 'top-22 start-24'

  return (
    <FrameGroup name={name} title={title} subtitle={subtitle} titlePosition={titlePosition}>
      <Row className="justify-content-end">
        <ImageCol md={6} src={postdisco1}/>
      </Row>
      <Row>
        <ImageCol src={postdisco2}/>
        <ImageCol src={postdisco3}/>
        <ImageCol src={postdisco4}/>
      </Row>
    </FrameGroup>
  )
}

export default PostDisco
