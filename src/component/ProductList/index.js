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
      cart: []
    }
  }

  addCart = async id => {
    const newData = this.state.data.find(item => item.id === id)
    const result = this.state.cart.concat(newData)

    // this is a slow operation, we can use await
    await this.setState({
      cart: result
    })

    // this is a fast operation, we can wait until this.setState() is finished
    console.log('this.state.cart:', this.state.cart)
  }

  render() {
    return (
      <ul>
        {this.state.data.map((product, index) => {
          return <Product add={this.addCart} product={product} key={index} />
        })}
      </ul>
    )
  }
}

export default ProductList
