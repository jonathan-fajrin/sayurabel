import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './component/Header'
import Footer from './component/Footer'

import Home from './pages/Home'
import Cart from './pages/Cart'

const initialState = {
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
  cart: [
    {
      id: 3,
      name: 'orange',
      image: '/assets/orange.jpg',
      price: 15,
      totalPrice: 15,
      quantity: 1
    },
    {
      id: 2,
      name: 'potato',
      image: '/assets/potato.png',
      price: 10,
      totalPrice: 10,
      quantity: 1
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const id = action.payload.id
      const newData = state.data.find(item => item.id === id)
      newData.totalPrice = newData.price
      newData.quantity = 1

      const result = state.cart.concat(newData)

      return {
        ...state, // data: []
        cart: result
      }
    }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
