import React, { Component } from 'react'

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
            <li key={index}>
              <div>
                <img src={product.image} />
              </div>
              <div>
                <p>{product.name}</p>
              </div>
              <div>
                <p>{product.price}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ProductList
