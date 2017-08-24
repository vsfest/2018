import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default () => (
  <Router>
    <Frame>
      <Link to="/css">CSS Conf</Link>
      <Link to="/js">JS Conf</Link>
      <Link to="/decompress">Decompress</Link>
    </Frame>
  </Router>
)
