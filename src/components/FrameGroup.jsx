import React, { useState } from 'react'

import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap'

import VideoFrame from '../components/VideoFrame'


const FrameGroup = ({name, title, subtitle, titlePosition, children}) => {
  // children -- images wrapped in a col by ImageCol component

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <VideoFrame name={name}/>
      </Modal>


      <Row className="m-0 p-0 mt-4 position-relative"
        onClick={handleShow}
        style={{cursor: 'pointer'}}
      >
        <div className={`position-absolute ${titlePosition}`}
          onClick={handleShow}
          style={{cursor: 'pointer'}}
        >
          <div>{title}</div>
          <small className="text-secondary">{subtitle}</small>
        </div>

        {
          children // images
        }

      </Row>

    </div>
  )

}

export default FrameGroup
