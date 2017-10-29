import css_wipe from 'css-wipe/js'
import { injectGlobal } from 'styled-components'

import font from './shared/fonts/Maison-Neue-Book.woff'

injectGlobal`
  ${ css_wipe}

  @font-face {
    font-family: 'Maison Neue';
    src: url('${font}') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  body {
    font-family: 'Maison Neue', Helvetica, Arial;
    font-size: 18px;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    border-bottom: 2px solid;
    cursor: pointer;
    
    &:hover {
      border-color: #222;
      transition: all 0.2s ease-in;
    }
  }
  
  strong {
    font-weight: bold;
  }
  
  p,
  blockquote {
    margin-bottom: 30px;
  }
  
  ul {
    list-style-type: disc;
    margin: 30px;
  }
  
  li {
    margin-bottom: 15px;
  }
  
  hr {
    width: 100%;
    height: 2px;
    border: none;
    background-color: white;
  }
`
