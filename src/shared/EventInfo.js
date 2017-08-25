import React from 'react'
import styled from 'styled-components'

const EventInfo = styled.div`
  margin: 20px auto;
  max-width: 45em;
  text-align: center;
`

export default ({ date, venue, description }) => {
  return (
    <EventInfo>
      <p>• {venue}</p>

      <p>{description}</p>
    </EventInfo>
  )
}
