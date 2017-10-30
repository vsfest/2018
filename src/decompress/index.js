import React from 'react'
import Home from '../shared/Home'
import { Decompress, Staff } from '../data'
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
  <Home conference={Decompress}>
    <Masthead {...Decompress} />
    <Container>      
        <Logo src={Decompress.logo} />
        <Section>
          <EventInfo {...Decompress} />
        </Section>

        <Section>
          <Schedule />
        </Section>
        
        <Section>
          <MailingList {...Decompress.contact} />
        </Section>

        <Section>
          <CodeOfConduct />
        </Section>
        
        <Section>
          <Sponsorship {...Decompress.contact} />
        </Section>
      </Container>

      <Footer {...Decompress} />
  </Home>
)
