import React, { Component } from 'react'
import ProductCart from '../ProductCart'
import styled from 'styled-components'
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  background-image: url('/assets/veggie-doodle.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`
class Content extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: 1,
          name: 'tomato',
          image: '/assets/tomato.jpg',
          price: 12
        },
        {
          id: 2,
          name: 'potato',
          image: '/assets/potato.png',
          price: 10
        },
        {
          id: 3,
          name: 'orange',
          image: '/assets/orange.jpg',
          price: 13
        }
      ],
      cart: [
        {
          id: 3,
          name: 'orange',
          image: '/assets/orange.jpg',
          price: 15,
          totalPrice: 30,
          item: 2
        },
        {
          id: 2,
          name: 'potato',
          image: '/assets/potato.png',
          price: 10,
          totalPrice: 20,
          item: 2
        }
      ]
    }
  }
  render() {
    return (
      <Container>
        <ProductCart Data={this.state.cart} />
      </Container>
    )
  }
}

export default Content
