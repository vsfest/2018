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

  const titoLink = conference.titoLink

  return (
    <Container>
      <Helmet {...conference}>
        <title>Speakers — {conference.title}</title>
      </Helmet>
      <Headline>Speakers</Headline>

      <Copy>
        Read <StyledLink to="schedule">the conference schedule</StyledLink>,{' '}
        <StyledLink to="speakers">talk descriptions</StyledLink> or{' '}
        <LinkThemed href={titoLink}>get a ticket &rarr;</LinkThemed>
      </Copy>

      {announcedSpeakers.map((speaker, i) => {
        return (
          <Speaker key={i} {...speaker} id={speaker.twitter}>
            <img src={speaker.image} alt={speaker.name} />
            <div>
              <LinkThemed href={`https://twitter.com/${speaker.twitter}`}>
                <HeadlineSmall>{speaker.name}</HeadlineSmall>
              </LinkThemed>
              <SpeakerLocation>{speaker.location}</SpeakerLocation>
              <p>{speaker.bio}</p>
              <SpeakerTalk>
                <HeadlineSmall>{speaker.talk}</HeadlineSmall>
                <TalkAbstract
                  dangerouslySetInnerHTML={{ __html: speaker.talkAbstract }}
                />
              </SpeakerTalk>
            </div>
          </Speaker>
        )
      })}
    </Container>
  )
}
