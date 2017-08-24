import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  background: ${ props => props.theme.primary };
  color: white;
  
  > img {
    max-width: calc(100vw - 4rem);
    max-height: 80vh;
  }
`

export default ({ conference }) => (
  <ThemeProvider theme={ conference.theme }>
    <Frame>
      <h1>HI EVERYONE WELCOME TO {conference.title}!</h1>
      <img src={conference.logo} alt="Logo"/>
    </Frame>
  </ThemeProvider>
)
