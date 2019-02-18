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

const LogoText = styled.span`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledContainer>
          <Link to="/">
            <LogoText>Sayurabel</LogoText>
          </Link>
          <Link to="/cart">
            <StyledIcon src="/assets/cart.png" />
          </Link>
        </StyledContainer>
      </StyledHeader>
    )
  }
}

export default Header
