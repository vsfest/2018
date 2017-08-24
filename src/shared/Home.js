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
`

export default ({ conference, children }) => (
  <ThemeProvider theme={ conference.theme }>
    <Frame>
      { children }
    </Frame>
  </ThemeProvider>
)
