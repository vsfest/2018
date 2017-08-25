import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CodeOfConduct = styled.div`
  margin: 20px auto;
  max-width: 45em;
  text-align: center;
`

export default () => {
  return (
    <CodeOfConduct>
      <p>All organisers, sponsors, speakers and attendees are required to follow the <Link to="codeofconduct">conference Code of Conduct</Link>.
      We are committed to providing a harassment-free, professional and welcoming environment for all attendees.</p>
    </CodeOfConduct>
  )
}
