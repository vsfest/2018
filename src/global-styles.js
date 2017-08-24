import css_wipe from 'css-wipe/js'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${ css_wipe }
  a { color: inherit; text-decoration: none; }
`
