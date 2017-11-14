import React from 'react'
import Home from '../shared/Home'
import { JS } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import { Section, SectionBannerExpanded } from '../shared/components/Section'
import EventExpectations from '../shared/EventExpectations'

export default () => (
  <Home conference={JS}>
    <Masthead {...JS} />
    <SectionBannerExpanded>
      <Container>
        <Logo src={JS.logo} />
        <EventInfo {...JS} />
      </Container>
    </SectionBannerExpanded>
    <Container>
      <Section>
        <EventExpectations />
      </Section>

      <Section>
        <Schedule />
      </Section>

      <Section>
        <MailingList {...JS.contact} />
      </Section>

      <Section>
        <CodeOfConduct />
      </Section>
    </Container>

    <Footer {...JS} />
  </Home>
)
