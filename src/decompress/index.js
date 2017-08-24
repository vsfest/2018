import React from 'react'
import Home from '../shared/Home'
import { Decompress } from '../data'
import Logo from '../shared/Logo'

export default () => (
  <Home conference={ Decompress }>
    <Logo src={Decompress.logo}/>
  </Home>
)
