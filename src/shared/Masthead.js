import React from 'react'
import styled from 'styled-components'

import LargeButtonLink from './components/LargeButtonLink'

const Masthead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
  text-transform: uppercase;
`

export default ({ date, titoLink }) => {
  return (
    <Masthead>
      <p>• {date}</p>
      <LargeButtonLink href={titoLink}>Buy Tickets</LargeButtonLink>
    </Masthead>
  )
}
