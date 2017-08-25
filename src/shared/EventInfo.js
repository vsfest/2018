import React from 'react'
import styled from 'styled-components'

const EventInfo = styled.div`
  margin: 20px auto;
  max-width: 45em;

  > p:nth-child(1) { text-align: center; }

  > p:nth-child(2) {
    text-align: left;
    font-size: 24px;
    margin: 40px 0;
  }
`

export default ({ date, venue, description }) => {
  return (
    <EventInfo>
      <p>• {venue}</p>

      <p>{description}</p>
    </EventInfo>
  )
}
