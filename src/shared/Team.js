import React from 'react'
import styled from 'styled-components'
import Headline from './components/Headline'


const Team = styled.div`
  display: flex;
`

const Human = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 30%;
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
            <div>
              <p>{person.name}</p>
              <a href={`https://twitter.com/${person.twitter}`}>@{person.twitter}</a>
            </div>
          </Human>
        )
      })}
    </Team>
  )
}
