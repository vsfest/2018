import React from 'react'
import styled from 'styled-components'

const Address = styled.div`
  margin-top: 2rem;
  text-align: center;
`

const Description = styled.div`
  margin-top: 4rem;
  text-align: left;
  font-size: 1.5rem;
`

export default ({ date, venue, description }) => {
  return (
    <div>
      <Address>• {venue}</Address>

      <Description>{description}</Description>
    </div>
  )
}
