import React from 'react'
import styled from 'styled-components'
import Headline from './components/Headline'


const Team = styled.div`

`

const Human = styled.div`

`

const Avatar = styled.img`
  border-radius: 100%;
  width: 45px;
  height: 45px;
`

export default ({ members }) => {
  return (
    <Team>
      <Headline>Team</Headline>
      {members.map((person, i) => {
        return (
          <Human key={i}>
            <Avatar src={person.mugshot} />
          </Human>
        )
      })}
    </Team>
  )
}
