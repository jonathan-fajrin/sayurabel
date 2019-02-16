import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  background-image: url('/assets/veggie-doodle.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 80vh;
`

class Cart extends Component {
  render() {
    return <Container>Cart Component</Container>
  }
}

export default Cart
