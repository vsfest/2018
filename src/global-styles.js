import css_wipe from 'css-wipe/js'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${ css_wipe}

  @font-face {
    font-family: 'Maison Neue';
    src: url('/fonts/Maison-Neue-Book.eot');
    src: url('/fonts/Maison-Neue-Book.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Maison-Neue-Book.woff') format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Maison Neue Mono';
    src: url('/fonts/Maison-Neue-Mono.eot');
    src: url('/fonts/Maison-Neue-Mono.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Maison-Neue-Mono.woff') format('woff');
    font-style: normal;
    font-weight: 400;
  }

  body {
    font-family: 'Maison Neue', Helvetica, Arial;
    font-display: swap;
    font-size: 20px;
    letter-spacing: 0.05rem;
    line-height: 1.45;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    border-bottom: 2px solid;
  }
`
