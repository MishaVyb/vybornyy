import React from 'react'
import { Badge, Col, Container, Row, Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { routes } from '../../routes'


const MyNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const links = routes.map((route)=>{
    if (route.path == '/') {
      return <></>
    }
    return(
      <Nav.Link key={route.path}>
        <Button
          variant='outline'
          size="sm"
          onClick={()=>{navigate(route.path)}}
          active={route.path==location.pathname}
        >
          {route.title}
        </Button>
      </Nav.Link>
    )
  })

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>vybornyy</Link>
          <span className="text-secondary"> | cinematography</span >
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {links}
          <Navbar.Text>

            {/*
            <p className="text-light">some link</p>
            <Link to={'/'}>
              <h6 className="text-light">some link</h6>
            </Link>
            <Link to={'/'}>
              some another link
            </Link> */}

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
