import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import JS from './js'
import CSS from './css'
import Decompress from './decompress'
import * as themes from './data'

import ScrollToTop from './shared/ScrollToTop'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Link = styled.a.attrs({
  href: props => props.to,
})`
  background: ${props => props.theme.primary};
  color: white;
  font-size: 1.5rem;
  padding: 2rem 4rem;
  border: 2px solid black;
  margin: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
`

const Help = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  pre {
    margin: 1rem;
    padding: 1rem;
    background: #ccc;
  }
`

const Index = () => (
  <Frame>
    <Help>
      Add this to your <code>/etc/hosts</code> file:
      <pre>127.0.0.1 css.localhost js.localhost decompress.localhost</pre>
      Then hax:
    </Help>
    <ThemeProvider theme={ themes.CSS.theme }>
      <Link to={ themes.CSS.url }>CSS Conf</Link>
    </ThemeProvider>
    <ThemeProvider theme={ themes.JS.theme }>
      <Link to={ `http://js.localhost:${window.location.port}` }>JS Conf</Link>
    </ThemeProvider>
    <ThemeProvider theme={ themes.Decompress.theme }>
      <Link to={ `http://decompress.localhost:${window.location.port}` }>
        Decompress
      </Link>
    </ThemeProvider>
  </Frame>
)

const domain = process.env.REACT_APP_CONF_DOMAIN || window.location.host
const RootComponentForDomain =
  /js/.exec(domain) ? JS :
    /css/.exec(domain) ? CSS :
      /decompress/.exec(domain) ? Decompress : Index

export default () => (
  <Router>
    <ScrollToTop>
      <RootComponentForDomain />
    </ScrollToTop>
  </Router>
)
