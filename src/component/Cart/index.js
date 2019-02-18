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
  displayCart = () => {
    console.log('this is what we have in the cart', this.props.cart)
  }

  render() {
    return (
      <Container>
        Cart Component
        <button onClick={this.displayCart}>Display Cart</button>
      </Container>
    )
  }
}

export default Cart
