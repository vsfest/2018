import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'

const Speaker = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 250px auto;
    grid-column-gap: 60px;
    align-items: center;
    text-align: left;
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

const SpeakerLocation = styled.p`
  color: hsla(0, 0%, 50%, 1);
`

export default ({ conference, titoLink }) => {
  const announcedSpeakers = conference.speakers.filter(
    speaker => speaker.announced === true
  )

  return (
    <Container>
      <Helmet {...conference}>
        <title>Speakers — {conference.title}</title>
      </Helmet>
      <Headline>Speakers</Headline>
      {announcedSpeakers.map((speaker, i) => {
        return (
          <Speaker key={i} {...speaker}>
            <img src={speaker.image} alt={speaker.name} />
            <div>
              <LinkThemed href={`https://twitter.com/${speaker.twitter}`}>
                <HeadlineSmall>{speaker.name}</HeadlineSmall>
              </LinkThemed>
              <SpeakerLocation>{speaker.location}</SpeakerLocation>
              <p>{speaker.bio}</p>
              <p className="mb0">
                <strong>Presentation:</strong> {speaker.talk}
              </p>
            </div>
          </Speaker>
        )
      })}
      <p>
        More speakers and full presentation schedule to be announced.{' '}
        <LinkThemed href={titoLink}>Get a ticket &rarr;</LinkThemed>
      </p>
    </Container>
  )
}
