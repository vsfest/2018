import React from 'react'
import styled from 'styled-components'
import { CSS, JS, Decompress } from '../data'

const Schedule = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const Heading = styled.h1`
  font-weight: bold;
`

const Conference = styled.div`
  display: flex;
  align-items: center;
  background: white;
  margin: 7px;
  padding: 30px;
  border-radius: 4px;
  text-align: left;
  color: ${ props => props.theme.primary};
`

const IdentityDot = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 20px;
  display: inline-block;
  border-radius: 100%;
  background-color: ${ props => props.theme.primary};
`

export default () => {
  return (
    <div>
      <Heading>Schedule</Heading>
      <Schedule>
        <Conference {...CSS}>
          <IdentityDot {...CSS} />
          <a href={CSS.url}>
            <div>
              <p>{CSS.title}</p>
              <p>{CSS.date}</p>
            </div>
          </a>
        </Conference>

        <Conference {...JS}>
          <IdentityDot {...JS} />
          <a href={JS.url}>
            <div>
              <p>{JS.title}</p>
              <p>{JS.date}</p>
            </div>
          </a>
        </Conference>

        <Conference {...Decompress}>
          <IdentityDot {...Decompress} />
          <a href={Decompress.url}>
            <div>
              <p>{Decompress.title}</p>
              <p>{Decompress.date}</p>
            </div>
          </a>
        </Conference>
      </Schedule>
    </div>
  )
}
