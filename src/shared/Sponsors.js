import React from 'react'
import Helmet from 'react-helmet'
import Container from '../shared/components/Container'
import Sponsorship from '../shared/Sponsorship'
import Copy from '../shared/components/Copy'

export default ({ conference }) => {
  return (
    <Container>
      <Helmet {...conference}>
        <title>Sponsors — {conference.title}</title>
      </Helmet>
      <Sponsorship {...conference} />
      <Copy>
        Our previous sponsors include: Campaign Monitor, Facebook, Zendesk,
        Mozilla, Adobe, Github, Sauce Labs, AirBnB, Envato, Sitepoint, Ferocia,
        Thick, Pin Payments, Real Estate, 99designs, Thinkmill, Buildkite,
        Westfield, and many more.
      </Copy>
    </Container>
  )
}
