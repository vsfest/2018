import React from 'react'
import styled from 'styled-components'

import LargeButtonLink from './components/LargeButtonLink'

const Masthead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  margin: 2rem 0;
`

export default ({ date, titoLink }) => {
  return (
    <Masthead>
      <p>• {date}</p>
      <LargeButtonLink href={titoLink}>Buy Tickets</LargeButtonLink>
    </Masthead>
  )
}
