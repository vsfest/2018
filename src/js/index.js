import React from 'react'
import Home from '../shared/Home'
import { JS } from '../data'
import Logo from '../shared/Logo'

export default () => (
  <Home conference={ JS }>
    <Logo src={JS.logo}/>
  </Home>
)
