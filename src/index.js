import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import 'css-wipe'
import { injectGlobal } from 'styled-components'

injectGlobal`
  a { color: inherit; text-decoration: none; }
`

ReactDOM.render(<Root />, document.getElementById('root'))
