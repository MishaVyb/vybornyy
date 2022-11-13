import React from 'react'
import { Col, Image } from 'react-bootstrap'

const ImageCol = ({src, ...props}) => {
  return (
    <Col
      className="m-1 p-0" {...props}
      style={props.onClick ? {cursor: 'pointer'} : {}}
    >
      <Image fluid={true} src={src} />
    </Col>
  )
}

export default ImageCol