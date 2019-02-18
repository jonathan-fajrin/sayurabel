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
const StyledIcon = styled.img`
  width: 30px;
  height: 20px;
`
const StyledProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
`

class Product extends Component {
  render() {
    return (
      <StyledLI>
        <div>
          <StyledImg src={this.props.product.image} />
        </div>
        <StyledProduct>
          {this.props.product.name[0].toUpperCase() +
            this.props.product.name.substr(1)}
          <p>
            {new Intl.NumberFormat('CAD', {
              maximumSignificantDigits: 3,
              style: 'currency',
              currency: 'CAD'
            }).format(this.props.product.price)}
          </p>
          <button
            onClick={() => {
              this.props.add(this.props.product.id)
            }}
          >
            <StyledIcon src="/assets/cart.png" />
          </button>
        </StyledProduct>
        <div>
          <p />
        </div>
      </StyledLI>
    )
  }
}

export default Product
