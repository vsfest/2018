import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'

import Container from '../shared/components/Container'

import { LinkThemed } from './components/Links'
import HeadlineSmall from './components/HeadlineSmall'

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const AvatarWrapper = styled.div`
  background-color: ${props => props.theme.primary};
`

const Human = styled.div`
  text-align: center;
  margin: 30px 0;
  width: 180px;

  @media (min-width: 768px) {
    width: 250px;
  }

  ${HeadlineSmall} {
    margin: 0;
  }
`

const Avatar = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 180px;
  mix-blend-mode: soft-light;

  @media (min-width: 768px) {
    width: 250px;
  }
`

export default ({ members }) => {
  return (
    <Container>
      <Headline>Team</Headline>
      <p>
        Our team consists of some of the most respected web practitioners both
        locally and globally. We’re regular contributors to Open Source, and
        have run many events in the past, from user group meetups like{' '}
        <LinkThemed href="https://www.meetup.com/SydCSS/">SydCSS</LinkThemed>,{' '}
        <LinkThemed href="https://twitter.com/ngmelb?lang=en">
          ngmelb
        </LinkThemed>, Melbourne Ruby,{' '}
        <LinkThemed href="https://www.meetup.com/en-AU/MelbCSS/">
          MelbCSS
        </LinkThemed>, BeResponsive to{' '}
        <LinkThemed href="https://twitter.com/cssconfoak">
          CSSConf Oakland
        </LinkThemed>{' '}
        or <LinkThemed href="https://2018.jsconf.eu/">JSConf EU</LinkThemed>.
        We’ve also spoken at events all over Australia and internationally.
      </p>

      <p>
        We know what makes an event great, and we’re striving to create an
        inclusive and memorable conference here in Melbourne. More importantly,
        we’re a registered not-for-profit, bootstrapping with many hours of
        hard, voluntary work.
      </p>
      <Members>
        {members.map((person, i) => {
          return (
            <Human key={i}>
              <AvatarWrapper>
                <Avatar src={person.mugshot} />
              </AvatarWrapper>
              <div>
                <HeadlineSmall>{person.name}</HeadlineSmall>
                <LinkThemed href={`https://twitter.com/${person.twitter}`}>
                  @{person.twitter}
                </LinkThemed>
              </div>
            </Human>
          )
        })}
      </Members>
      <p>
        Our thanks go to countless volunteers aiding us each year in creating a
        remarkable event.
      </p>
    </Container>
  )
}
