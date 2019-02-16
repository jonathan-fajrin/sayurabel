import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: green;
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
          <div>Sayurabel</div>
          <StyledIcon src="/assets/cart.png" />
        </StyledContainer>
      </StyledHeader>
    )
  }
}

export default Header
