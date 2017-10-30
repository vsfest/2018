import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import Copy from './components/Copy'
import Section from './components/Section'

const Expectations = styled.div`
  @media (min-width: 30em) {
    display: flex;
    
    ul {
      flex: auto;
    }
  }
`

export default () => {
  return (
    <div>
      <Headline>What to expect</Headline>
        <Expectations>
        <ul>
          <li>8 high quality talks per day</li>
          <li>nutritious meals</li>
          <li>endless coffee and soft drinks</li>
        </ul>
        <ul>
          <li>gender neutral bathrooms</li>
          <li>live captioning</li>
          <li>wheelchair-accessible venue</li>
        </ul>
      </Expectations>
    </div>
  )
}
