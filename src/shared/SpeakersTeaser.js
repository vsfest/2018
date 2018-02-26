import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import { LinkThemed } from './components/Links'
import Copy from './components/Copy'

const StyledLink = LinkThemed.withComponent(Link)

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
  }
`

export default ({
  hasSchedule,
  hasWorkshops,
  speakers,
  workshops,
  titoLink
}) => {
  const announcedSpeakers = speakers
    .concat(workshops || [])
    .filter(speaker => speaker.announced === true)

  return (
    <div>
      <Headline>Speakers</Headline>
      <Copy>
        Read the{' '}
        {hasSchedule && (
          <StyledLink to="schedule">conference schedule</StyledLink>
        )}
        {hasSchedule && ', '}
        <StyledLink to="speakers">talk descriptions</StyledLink>
        {hasWorkshops && ', '}
        {hasWorkshops && (
          <StyledLink to="workshops">workshop details</StyledLink>
        )}
        {' or '}
        <LinkThemed href={titoLink}>
          get a ticket to CSSConf or Decompress &rarr;
        </LinkThemed>
      </Copy>
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
    </div>
  )
}
