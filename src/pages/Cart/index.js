import React, { Component } from 'react'
import styled from 'styled-components'

import ProductCart from '../../component/ProductCart'

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  background-image: url('/assets/veggie-doodle.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`

class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductCart />
      </Container>
    )
  }
}

export default Cart
