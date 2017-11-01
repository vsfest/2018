import React from 'react'
import styled from 'styled-components'

const CalloutCopy = styled.p`
  font-size: 20px;
  margin: 0;
  
  @media (max-width: 48em) {
    text-align: center;
  }
`

const Description = styled.div`
  margin-top: 30px;
`

export default ({ date, venue, description }) => {
  return (
    <div>
      <CalloutCopy>{date}</CalloutCopy>
      <CalloutCopy>{venue}</CalloutCopy>

      <Description>
        <CalloutCopy>
          {description}
        </CalloutCopy>
      </Description>
    </div>
  )
}
