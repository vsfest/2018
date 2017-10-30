import React from 'react'
import Home from '../shared/Home'
import { JS, Staff } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import Team from '../shared/Team'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'

export default () => (
  <Home conference={JS}>
    <Masthead {...JS} />
    <Container>

      <Logo src={JS.logo} />
      <Section>
        <EventInfo {...JS} />
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
      
      <Section>
        <Sponsorship {...JS.contact} />
      </Section>
    </Container>

    <Footer {...JS} />
  </Home>
)
