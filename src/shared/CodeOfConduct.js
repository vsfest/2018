import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Headline from './components/Headline'
import Copy from './components/Copy'

import {LinkMono} from './components/Links'

const CodeOfConduct = styled.div`
`

export default () => {
  return (
    <CodeOfConduct>
      <Headline>Code of Conduct</Headline>
      <Copy>All organisers, sponsors, speakers and attendees are required to follow the <Link to="code-of-conduct" passHref><LinkMono>conference Code of Conduct</LinkMono></Link>.
      We are committed to providing a harassment-free, professional and welcoming environment for all attendees.</Copy>
    </CodeOfConduct>
  )
}
