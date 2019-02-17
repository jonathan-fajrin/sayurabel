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
      ],
      cart: []
    }
  }
  addCart = id => {
    const newData = this.state.data.find(oldData => {
      // console.log(id)

      return oldData.id === id
    })

    const coba = this.state.cart.concat({
      id: newData.id,
      name: newData.name,
      image: newData.image,
      price: newData.price
    })
    this.setState({
      cart: coba
    })

    console.log(this.state.cart)
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
