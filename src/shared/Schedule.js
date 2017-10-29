import React from 'react'
import styled from 'styled-components'
import { CSS, JS, Decompress } from '../data'

import Headline from './components/Headline'
import Copy from './components/Copy'

const Schedule = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 30px 0;
`

const Conference = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 30px;
  margin-right: 10px;
  margin-bottom: 30px;
  width: 100%;
  text-align: left;
  color: ${ props => props.theme.primary};
  
  p {
    margin: 0;
  }
  
  @media (min-width: 700px) {
    width: calc(33% - 10px);
  }
`

export default () => {
  return (
    <div>
      <Headline>Schedule</Headline>
      <Copy>The conference is a part of a bigger family of events. Limited Early Bird tickets are now available. Our programme will be announced by January 2018.</Copy>
      <Schedule>
        <Conference {...CSS}>
          <a href={CSS.url}>
            <div>
              <p>{CSS.title}</p>
              <span>{CSS.date}</span>
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
        <a href={CSS.titoLink}>Get a Ticket</a>
      </Schedule>
    </div>
  )
}
