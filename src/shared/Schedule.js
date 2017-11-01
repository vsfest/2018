import React from 'react'
import styled from 'styled-components'
import { CSS, JS, Decompress } from '../data'

import Headline from './components/Headline'
import Copy from './components/Copy'
import { LinkThemed } from './components/Links'
import { ButtonThemed } from './components/Buttons'

const Schedule = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 30px 0;
`

const Conference = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${props => props.theme.secondary};
  padding: 30px;
  margin-right: 10px;
  margin-bottom: 30px;
  width: 100%;
  text-align: left;

  p {
    margin: 0;
  }

  @media (min-width: 700px) {
    width: calc(33% - 10px);
  }

  a {
    color: ${props => props.theme.primary};

    &:hover {
      color: ${props => props.theme.primaryHover};
    }
  }
`

export default () => {
  return (
    <div>
      <Headline>Schedule</Headline>
      <Copy>
        The conference is a part of a bigger family of events. Limited Early
        Bird tickets are now available. Our programme will be announced by
        January 2018.
      </Copy>
      <Schedule>
        <Conference {...CSS}>
          <LinkThemed href={CSS.url}>
            <div>
              <p>{CSS.title}</p>
              <span>{CSS.date}</span>
            </div>
          </LinkThemed>
        </Conference>

        <Conference {...JS}>
          <LinkThemed href={JS.url}>
            <div>
              <p>{JS.title}</p>
              <p>{JS.date}</p>
            </div>
          </LinkThemed>
        </Conference>

        <Conference {...Decompress}>
          <LinkThemed href={Decompress.url}>
            <div>
              <p>{Decompress.title}</p>
              <p>{Decompress.date}</p>
            </div>
          </LinkThemed>
        </Conference>
        <ButtonThemed href={CSS.titoLink}>Get a Ticket</ButtonThemed>
      </Schedule>
    </div>
  )
}
