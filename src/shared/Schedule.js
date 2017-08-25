import React from 'react'
import styled from 'styled-components'
import { CSS, JS, Decompress } from '../data'

import Headline from './components/Headline'
import Copy from './components/Copy'

const Schedule = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`

const Conference = styled.div`
  display: flex;
  align-items: center;
  background: white;
  margin: 1rem 0.5rem;
  padding: 30px;
  border-radius: 4px;
  text-align: left;
  color: ${ props => props.theme.primary};
`

export default () => {
  return (
    <div>
      <Headline>Schedule</Headline>
      <Schedule>
        <Conference {...CSS}>
          <a href={CSS.url}>
            <div>
              <p>{CSS.title}</p>
              <p>{CSS.date}</p>
            </div>
          </a>
        </Conference>

        <Conference {...JS}>
          <a href={JS.url}>
            <div>
              <p>{JS.title}</p>
              <p>{JS.date}</p>
            </div>
          </a>
        </Conference>

        <Conference {...Decompress}>
          <a href={Decompress.url}>
            <div>
              <p>{Decompress.title}</p>
              <p>{Decompress.date}</p>
            </div>
          </a>
        </Conference>
      </Schedule>

      <Copy>Early Bird tickets are extremely limited. Because our full programme hasn't been announced yet you're able to secure a pass on a discounted price.</Copy>
      <a href={CSS.titoLink}>Buy Tickets</a>
    </div>
  )
}
