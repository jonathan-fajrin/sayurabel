import React, { Component } from 'react'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
