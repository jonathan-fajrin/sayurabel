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

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: 1,
          name: 'tomato',
          image: '/assets/tomato.jpg',
          price: 12000
        },
        {
          id: 2,
          name: 'potato',
          image: '/assets/potato.png',
          price: 12000
        },
        {
          id: 3,
          name: 'orange',
          image: '/assets/orange.jpg',
          price: 12000
        }
      ]
    }
  }
  render() {
    console.log(this.state.data)

    return (
      <ul>
        {this.state.data.map((product, index) => {
          return (
            <StyledLI key={index}>
              <div>
                <StyledImg src={product.image} />
              </div>
              <div>
                <p>{product.name}</p>
              </div>
              <div>
                <p>{product.price}</p>
              </div>
            </StyledLI>
          )
        })}
      </ul>
    )
  }
}

export default ProductList
