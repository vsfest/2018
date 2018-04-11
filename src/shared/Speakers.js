import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import Copy from './components/Copy'

const StyledLink = LinkThemed.withComponent(Link)

const Speaker = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 250px auto;
    grid-column-gap: 60px;
    text-align: left;
    margin-bottom: 90px;
  }

  text-align: center;
  margin-bottom: 60px;

  img {
    width: 250px;
    height: 250px;
    @media (max-width: 47em) {
      margin-bottom: 30px;
    }
  }

  ${HeadlineSmall} {
    margin-bottom: 0;
  }
`

const SpeakerTalk = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 30px;

  ${HeadlineSmall} {
    overflow-wrap: break-word;
  }
`

const TalkAbstract = styled.p`
  margin: 30px 0 0 0;
`

const SpeakerLocation = styled.p`
  color: hsla(0, 0%, 50%, 1);
`

export default ({ conference }) => {
  const announcedSpeakers = conference.speakers.filter(
    speaker => speaker.announced === true
  )

  return (
    <Container>
      <Helmet {...conference}>
        <title>Speakers — {conference.title}</title>
      </Helmet>
      <Headline>Speakers</Headline>

      <Copy>
        Read the{' '}
        {conference.hasSchedule && (
          <StyledLink to="schedule">conference schedule</StyledLink>
        )}
        {conference.hasSchedule && ' and '}
        <StyledLink to="speakers">talk descriptions</StyledLink>
        {conference.hasWorkshops && ' and '}
        {conference.hasWorkshops && (
          <StyledLink to="workshops">workshop details</StyledLink>
        )}.
      </Copy>

      {announcedSpeakers.map((speaker, i) => {
        return (
          <Speaker key={i} {...speaker} id={speaker.twitter}>
            <img src={speaker.image} alt={speaker.name} />
            <div>
              <LinkThemed
                href={
                  speaker.twitter
                    ? `https://twitter.com/${speaker.twitter}`
                    : speaker.url
                }
              >
                <HeadlineSmall>{speaker.name}</HeadlineSmall>
              </LinkThemed>
              <SpeakerLocation>{speaker.location}</SpeakerLocation>
              <p dangerouslySetInnerHTML={{ __html: speaker.bio }} />
              {!speaker.isHost ? (
                <SpeakerTalk>
                  <HeadlineSmall>{speaker.talk}</HeadlineSmall>
                  <TalkAbstract
                    dangerouslySetInnerHTML={{ __html: speaker.talkAbstract }}
                  />
                </SpeakerTalk>
              ) : null}
            </div>
          </Speaker>
        )
      })}
    </Container>
  )
}
