import React, { Component } from 'react'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import Cart from './component/Cart'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
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
