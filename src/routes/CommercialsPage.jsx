import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BurgerKing from '../content/BurgerKing'
import Letyshops from '../content/Letyshops'
import Ozon from '../content/Ozon'
import Pashinin from '../content/Pashinin'
import SkillBox from '../content/SkillBox'

class CommercialsPage extends Component {
  render() {
    return (
      <Container className="w-75">
        <Ozon />
        <SkillBox />
        <BurgerKing />
        <Pashinin />
        <Letyshops />
      </Container>
    )
  }
}

export default CommercialsPage