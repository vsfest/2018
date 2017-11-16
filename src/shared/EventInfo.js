import React from 'react'
import styled from 'styled-components'

const CalloutCopy = styled.p`
  margin: 0 auto;
  text-align: center;
  max-width: 30em;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`

const Description = styled.div`margin-top: 30px;`

export default ({ date, city, description }) => {
  return (
    <div>
      <CalloutCopy>{date}</CalloutCopy>
      <CalloutCopy>{city}</CalloutCopy>

      <Description>
        <CalloutCopy>{description}</CalloutCopy>
      </Description>
    </div>
  )
}
