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

const Workshop = styled.div`
  @media (min-width: 48em) {
    text-align: left;
    margin-bottom: 70px;
  }

  text-align: center;
  margin-bottom: 50px;
`

const Speaker = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 250px auto;
    grid-column-gap: 60px;
    text-align: left;
  }

  text-align: center;
  margin-bottom: 10px;

  img {
    width: 250px;
    height: 250px;
    @media (max-width: 47em) {
      margin-bottom: 30px;
    }
  }

  ${HeadlineSmall} {
    margin-bottom: 1rem;
  }
`

const SpeakerLocation = styled.p`
  color: hsla(0, 0%, 50%, 1);
`

export default ({ conference }) => {
  const announcedWorkshops = conference.workshops.filter(
    workshop => workshop.announced === true
  )

  const titoLink = conference.titoLink

  return (
    <Container>
      <Helmet {...conference}>
        <title>Workshops — {conference.title}</title>
      </Helmet>
      <Headline>Workshops</Headline>

      <Copy>
      Read the{' '}
      {conference.hasSchedule && (
        <StyledLink to="schedule">conference schedule</StyledLink>
      )}
      {conference.hasSchedule && ', '}
      <StyledLink to="speakers">talk descriptions</StyledLink>
      {conference.hasWorkshops && ', '}
      {conference.hasWorkshops && (
        <StyledLink to="workshops">workshop details</StyledLink>
      )}
      {' or '}
        <LinkThemed href={titoLink}>get a ticket &rarr;</LinkThemed>
      </Copy>

      {announcedWorkshops.map((workshop, i) => {
        return (
          <Workshop key={i}>
            <HeadlineSmall>{workshop.talk}</HeadlineSmall>
            {workshop.speakers.map((speaker, j) => (
              <Speaker key={j}>
                <img src={speaker.image} alt={speaker.name} />
                <div>
                  <LinkThemed href={speaker.twitter ? `https://twitter.com/${speaker.twitter}` : speaker.url}>
                    <HeadlineSmall>{speaker.name}</HeadlineSmall>
                  </LinkThemed>
                  <SpeakerLocation>{speaker.location}</SpeakerLocation>
                  <p>{speaker.bio}</p>
                </div>
              </Speaker>
            ))}
          </Workshop>
        )
      })}
    </Container>
  )
}
