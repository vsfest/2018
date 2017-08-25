import React from 'react'
import styled from 'styled-components'

import LargeButtonLink from './components/LargeButtonLink'

const Masthead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  margin: 30px 0;
`

const Date = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  
  @media (min-width: 500px) {
    width: auto;
  }
`

export default ({ date, titoLink }) => {
  return (
    <Masthead>
      <Date>• {date}</Date>
      <LargeButtonLink href={titoLink}>Buy Tickets</LargeButtonLink>
    </Masthead>
  )
}
