import React from 'react'
import styled from 'styled-components'

const CodeOfConduct = styled.div`
  margin: 20px auto;
  max-width: 45em;
  text-align: center;
`

export default () => {
  return (
    <CodeOfConduct>
      <p>All organisers, sponsors, speakers and attendees are required to follow the <a href="/codeofconduct">conference Code of Conduct</a>.
      We are committed to providing a harassment-free, professional and welcoming environment for all attendees.</p>
    </CodeOfConduct>
  )
}
