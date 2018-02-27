import css_wipe from 'css-wipe/js'
import { injectGlobal } from 'styled-components'

import fontBookWoff from './assets/fonts/MaisonNeue-Book.woff'
import fontBookWoff2 from './assets/fonts/MaisonNeue-Book.woff2'
import fontBoldWoff from './assets/fonts/MaisonNeue-ExtraBold.woff'
import fontBoldWoff2 from './assets/fonts/MaisonNeue-ExtraBold.woff2'
import { typography } from './styles/traits'

injectGlobal`
  ${css_wipe}

  @font-face {
    font-family: 'Maison Neue Book';
    src: url('${fontBookWoff}') format('woff');
    src: url('${fontBookWoff2}') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Maison Neue Extra Bold';
    src: url('${fontBoldWoff}') format('woff');
    src: url('${fontBoldWoff2}') format('woff2');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }

  body {
    ${ typography.normal };
    font-size: 20px;
    line-height: 1.5;
  }
  
  strong {
    ${ typography.bold };
  }
  
  p,
  blockquote {
    margin-bottom: 30px;
  }
  
  ul {
    list-style-type: disc;
    margin: 0 0 30px 20px;
  }
  
  li {
    margin-bottom: 15px;
  }

  .mb0 {
    margin-bottom: 0;
  }
`
