import React from 'react'

import Container from '../shared/components/Container'
import Sponsorship from '../shared/Sponsorship'
import Copy from '../shared/components/Copy'

export default ({ conference }) => {
  return (
    <Container>
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
