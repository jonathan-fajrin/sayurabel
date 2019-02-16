import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  background: #7acf47;
`
const StyledIcon = styled.img`
  width: 30px;
  height: 20px;
`

const StyledContainer = styled.div`
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  height: 80px;
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledContainer>
          <Link to="/">
            <div>Sayurabel</div>
          </Link>
          <Link to="/checkout">
            <StyledIcon src="/assets/cart.png" />
          </Link>
        </StyledContainer>
      </StyledHeader>
    )
  }
}

export default Header
