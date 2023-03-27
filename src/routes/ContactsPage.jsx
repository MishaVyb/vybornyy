import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import me from './../media/images/me-dark.jpg'

const ContactsPage = () => {
  return (
    // <div style={{height: '800px'}}>
    //   <div className="h-100 p-3 border border-primary">Width</div>
    // </div>
    <div className="position-relative" style={{height: '560px'}}>

      <Image className="h-100 position-absolute start-8" src={me} />

      <div className="w-75 position-absolute top-12 start-35 p-5">
        <p className='lead'>
      Moscow-based director of photography, Misha works on narrative,
      documentary and commercial projects. Graduate Moscow Film School
      at 2018. Feel free to contact for any reason.
        </p>
      </div>


      <ul className="list-unstyled w-75 position-absolute top-37 start-55 p-5">
        <li>+7 (916) 397-81-42</li>
        <li><a href='mailto:misha.vybornyy@gmail.com'>misha.vybornyy@gmail.com</a></li>
        <br></br>
        <li><a href='t.me/mishaviborniy'>t.me/mishaviborniy</a></li>
        <li><a href='instagram.com/misha.vib'>instagram.com/misha.vib</a></li>
        <li><a href='vimeo.com/viborniy'>vimeo.com/viborniy</a></li>
      </ul>



    </div>
  )
}

export default ContactsPage