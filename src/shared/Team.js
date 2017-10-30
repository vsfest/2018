import React from 'react'
import styled from 'styled-components'

import Title from './components/Title'

import Container from '../shared/components/Container'
import Section from '../shared/components/Section'
import {LinkMono} from './components/Links'

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Human = styled.div`
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  
  p {
    margin: 0;
  }
  
  @media (min-width: 30em) {
    width: 180px;
  }
`

const Avatar = styled.img`
  display: block;
  margin: 30px auto;
  border-radius: 100%;
  width: 70px;
  height: 70px;
`

export default ({ members }) => {
  return (
    <Container>
      <Title>Team</Title>
      <Section>
        <p>Our team consists of some of the most respected web practitioners both locally and globally. We’re regular contributors to Open Source, and have run many events in the past, from user group meetups like SydCSS, ngmelb, Melbourne Ruby, Sydney Ruby, MelbCSS, BeResponsive to CSSConf Oakland or JSConf EU. We’ve also spoken at events all over Australia and internationally.</p>

        <p>We know what makes an event great, and we’re striving to create an inclusive and memorable conference here in Melbourne. More importantly, we’re a registered not-for-profit, bootstrapping CSSConf with many hours of hard, voluntary work—your help is invaluable and appreciated by both us and the community.</p>
        <Members>
          {members.map((person, i) => {
            return (
              <Human key={i}>
                <Avatar src={person.mugshot} />
                <div>
                  <p>{person.name}</p>
                  <LinkMono href={`https://twitter.com/${person.twitter}`}>@{person.twitter}</LinkMono>
                </div>
              </Human>
            )
          })}
        </Members>
      </Section>
      </Container>
    )
  }
