import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink
} from 'react-router-dom'

import JS from './js'
import CSS from './css'
import Decompress from './decompress'
import * as themes from './data'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Link = styled(RouterLink)`
  background: ${ props => props.theme.primary };
  color: white;
  font-size: 1.5rem;
  padding: 2rem 4rem;
  border: 2px solid black;
  margin: 1rem;
  border-radius: 0.5rem;
`

const Index = () => (
  <Frame>
    <ThemeProvider theme={themes.CSS.theme}>
      <Link to="/css/">CSS Conf</Link>
    </ThemeProvider>
    <ThemeProvider theme={themes.JS.theme}>
      <Link to="/js/">JS Conf</Link>
    </ThemeProvider>
    <ThemeProvider theme={themes.Decompress.theme}>
      <Link to="/decompress/">Decompress</Link>
    </ThemeProvider>
  </Frame>
)

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/js" component={JS}/>
      <Route path="/css" component={CSS}/>
      <Route path="/decompress" component={Decompress}/>
    </div>
  </Router>
)
