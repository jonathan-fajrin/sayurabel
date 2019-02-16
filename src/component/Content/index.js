import React, { Component } from 'react'
import ProductList from '../ProductList'
import styled from 'styled-components'
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  background-image: url('/assets/veggie-doodle.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 60vw;
`
class Content extends Component {
  render() {
    return (
      <Container>
        <ProductList />
      </Container>
    )
  }
}

export default Content
