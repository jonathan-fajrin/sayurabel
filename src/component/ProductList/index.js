import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from '../Product'

class ProductList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((product, index) => {
          return <Product product={product} key={index} />
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(ProductList)
