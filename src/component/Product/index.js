import React, { Component } from 'react'
import styled from 'styled-components'

const StyledLI = styled.li`
  margin: 0 auto;
  align-content: center;
  width: 500px;
  list-style: none;
  background-color: #7acf47;
`
const StyledImg = styled.img`
  text-align: center;
  width: 250px;
  list-style: none;
  margin-top: 20px;
`

class Product extends Component {
  render() {
    return (
      <StyledLI>
        <div>
          <StyledImg src={this.props.product.image} />
        </div>
        <div>
          <p>{this.props.product.name}</p>
        </div>
        <div>
          <p>{this.props.product.price}</p>
        </div>
      </StyledLI>
    )
  }
}

export default Product
