import React from 'react'
import Home from '../shared/Home'
import { CSS, Staff } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'

export default () => (
  <Home conference={CSS}>
    <Masthead {...CSS} />
    <Container>

      <Logo src={CSS.logo} />
      <Section>
        <EventInfo {...CSS} />
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
