import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import { LinkThemed } from './components/Links'

const Speaker = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    margin-bottom: 30px;
  }

  ${HeadlineSmall} {
    margin-bottom: 0;
  }
`

const SpeakersWrapper = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    margin-bottom: 30px;
  }
`

export default ({ speakers, titoLink }) => {
  const announcedSpeakers = speakers.filter(
    speaker => speaker.announced === true
  )

  return (
    <div>
      <Headline>Speakers</Headline>
      <SpeakersWrapper>
        {announcedSpeakers.map((speaker, i) => {
          return (
            <Speaker key={i} {...speaker}>
              <img src={speaker.image} alt={speaker.name} />
              <LinkThemed href={`https://twitter.com/${speaker.twitter}`}>
                <HeadlineSmall>{speaker.name}</HeadlineSmall>
              </LinkThemed>
              <p>{speaker.location}</p>
            </Speaker>
          )
        })}
      </SpeakersWrapper>
      <p>
        <LinkThemed href="/speakers">More speakers</LinkThemed> and full
        presentation schedule to be announced.{' '}
        <LinkThemed href={titoLink}>Get a ticket &rarr;</LinkThemed>
      </p>
    </div>
  )
}
