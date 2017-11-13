import React from 'react'
import Home from '../shared/Home'
import { CSS } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import EventExpectations from '../shared/EventExpectations'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import { Section } from '../shared/components/Section'
import News from '../shared/News'

export default () => (
  <Home conference={CSS}>
    <Masthead {...CSS} />
    <Container>
      <Logo src={CSS.logo} />
      <Section>
        <EventInfo {...CSS} />
      </Section>

      <Section>
        <EventExpectations />
      </Section>

      <Section>
        <News conferenceId={CSS.id} />
      </Section>

      <Section>
        <Schedule />
      </Section>

      <Section>
        <MailingList {...CSS.contact} />
      </Section>

      <Section>
        <CodeOfConduct />
      </Section>

      <Section>
        <Sponsorship {...CSS.contact} />
      </Section>
    </Container>

    <Footer {...CSS} />
  </Home>
)
