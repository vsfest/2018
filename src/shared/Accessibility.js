import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import Copy from './components/Copy'

const StyledLink = LinkThemed.withComponent(Link)

export default ({ conference }) => {
  return (
    <Container>
      <Helmet {...conference}>
        <title>Accessibility Statement — {conference.title}</title>
      </Helmet>
      <Headline>Accessibility Statement</Headline>
      <p>
        {conference.title} is committed to providing an inclusive, accessible
        space for all participants.
      </p>
      <p>
        The event will be held at North Melbourne Meat Market, accessible via
        one entrance at 5 Blackwood Street.
      </p>

      <HeadlineSmall>What to expect</HeadlineSmall>
      <ul>
        <li>All talks will be in English, accompanied by live captions.</li>
        <li>
          Dietary requirement-compliant, healthy, nutritious food will be served
          throughout the day, including breakfast, morning and afternoon teas,
          and lunch.
        </li>
        <li>
          Any after-parties held at the conference venue will be catered, and we
          will be providing alcoholic beverages as well as soft drinks.
        </li>
        <li>
          Snacks (fruit) and drinks (coffee, tea, soft drinks, water) will be
          available at all times.
        </li>
        <li>Wi-Fi and outlets will be available.</li>
        <li>
          Pavilions are flat or cobblestone with accessible ramps for
          wheelchairs.
        </li>
        <li>
          Anyone with mobility, hearing or vision issues can reserve a front-row
          seat.
        </li>
        <li>
          Our bathrooms are multi-stall and gender-neutral featuring an
          accessible cubicle in each one of them.
        </li>
        <li>Service dogs are welcome.</li>
        <li>
          We have a <StyledLink to="code-of-conduct">
            media policy
          </StyledLink>{' '}
          in place, with lanyards indicating the level of comfort attendees have
          with being photographed or recorded.
        </li>
        <li>
          A <StyledLink to="code-of-conduct">
            Code of Conduct team
          </StyledLink>{' '}
          is available throughout the entire event and parties to address any
          incidents, microaggressions or ableisms.
        </li>
        <li>
          Our speakers have been advised to avoid using epilepsy-inducing videos
          and animations, however we cannot fully guarantee compliance.
        </li>
      </ul>
      <HeadlineSmall>Contact</HeadlineSmall>
      <Copy>
        If you’re in need of any further assistance or have questions, do not
        hesitate to{' '}
        <LinkThemed href={`mailto:${conference.contact.team}`}>
          contact the team
        </LinkThemed>. We’d love to have you at our event 💖
      </Copy>
    </Container>
  )
}
