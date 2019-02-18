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
      cart: [],
    }
  }
  addtoCart = id => {
    let product = this.state.data.find(product => {
      return product.id === id
    })
    let newCart = this.state.cart.concat(product)
    this.setState({
      cart: newCart,
    })
    console.log(this.state.cart)
  }

  render() {
    return (
      <ul>
        {this.state.data.map((product, index) => {
          return (
            <Product product={product} key={index} addtoCart={this.addtoCart} />
          )
        })}
      </ul>
    )
  }
}

export default ProductList
