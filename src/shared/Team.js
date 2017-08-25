import React from 'react'
import styled from 'styled-components'
import Headline from './components/Headline'


const Team = styled.div`
  margin: 10px 0;
`

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Human = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  width: 50%;
  
  @media (min-width: 768px) {
    width: 180px;
  }
`

const Avatar = styled.img`
  display: block;
  margin: 20px auto;
  border-radius: 100%;
  width: 70px;
  height: 70px;
`

export default ({ members }) => {
  return (
    <Team>
      <Headline>Team</Headline>
      <Members>
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
      </Members>
    </Team>
  )
}
