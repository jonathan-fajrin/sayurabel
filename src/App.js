import React, { Component } from 'react'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import Cart from './component/Cart'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
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
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/Checkout" component={Cart} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
