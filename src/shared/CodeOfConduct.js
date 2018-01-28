import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Headline from './components/Headline'
import Copy from './components/Copy'

const CodeOfConduct = styled.div`
  a {
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.primary};

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${props => props.theme.primaryHover};
      text-decoration: none;
    }
  }
`

export default () => {
  return (
    <CodeOfConduct>
      <Headline>Code of Conduct</Headline>
      <Copy>
        All organisers, sponsors, speakers, attendees or anyone interacting with
        the event and its participants through social media are required to
        follow the <Link to="code-of-conduct">conference Code of Conduct</Link>.
        We are committed to providing a harassment-free, professional and
        welcoming environment for all attendees.
      </Copy>
    </CodeOfConduct>
  )
}
