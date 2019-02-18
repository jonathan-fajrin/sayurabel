import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledLI = styled.li`
  margin: 0 auto;
  align-content: center;
  width: 500px;
  list-style: none;
  background-color: #7acf47;
`

const StyledProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
`

class ProductCart extends Component {
  render() {
    let number = 0

    return (
      <ul>
        {this.props.cart.map((product, index) => {
          number += 1

          return (
            <StyledLI key={index}>
              <StyledProduct>
                <p>{number}</p>
                {product.name[0].toUpperCase() + product.name.substr(1)}
                <p>
                  {new Intl.NumberFormat('CAD', {
                    style: 'currency',
                    currency: 'CAD'
                  }).format(product.price)}
                </p>
                <p>{product.quantity}</p>
                <p>
                  {new Intl.NumberFormat('CAD', {
                    style: 'currency',
                    currency: 'CAD'
                  }).format(product.totalPrice)}
                </p>
              </StyledProduct>
            </StyledLI>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(ProductCart)
