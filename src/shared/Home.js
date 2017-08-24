import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  color: ${ props => props.theme.primary }
`

export default ({ conference }) => (
  <ThemeProvider theme={ conference.theme }>
    <Frame>
      <h1>HI EVERYONE WELCOME TO {conference.title}!</h1>
    </Frame>
  </ThemeProvider>
)
