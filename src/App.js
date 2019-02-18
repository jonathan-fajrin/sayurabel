import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './component/Header'
import Footer from './component/Footer'

import Home from './pages/Home'
import Cart from './pages/Cart'

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App
