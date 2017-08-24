import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import JS from './js'
import CSS from './css'
import Decompress from './decompress'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
 
  > * {
    font-size: 1.5rem;
    padding: 2rem 4rem;
    border: 2px solid;
    margin: 1rem;
    border-radius: 0.5rem;
  } 
`

const Index = () => (
  <Frame>
    <Link to="/css">CSS Conf</Link>
    <Link to="/js">JS Conf</Link>
    <Link to="/decompress">Decompress</Link>
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
