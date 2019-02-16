import React, { Component } from 'react'
import Product from '../Product'

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: 1,
          name: 'tomato',
          image: '/assets/tomato.jpg',
          price: 12000,
        },
        {
          id: 2,
          name: 'potato',
          image: '/assets/potato.png',
          price: 12000,
        },
        {
          id: 3,
          name: 'orange',
          image: '/assets/orange.jpg',
          price: 12000,
        },
      ],
    }
  }
  render() {
    return (
      <ul>
        {this.state.data.map((product, index) => {
          return <Product product={product} key={index} />
        })}
      </ul>
    )
  }
}

export default ProductList
