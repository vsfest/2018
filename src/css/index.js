import React from 'react'
import Home from '../shared/Home'
import { CSS } from '../data'
import Logo from '../shared/Logo'

export default () => (
  <Home conference={ CSS }>
    <Logo src={CSS.logo}/>
  </Home>
)
