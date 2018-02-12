import React from 'react'
import Home from '../shared/Home'
import { JS } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import SpeakersTeaser from '../shared/SpeakersTeaser'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import EventsList from '../shared/EventsList'
import { Section, SectionBannerExpanded } from '../shared/components/Section'
import EventExpectations from '../shared/EventExpectations'
import News from '../shared/News'

export default () => (
  <Home conference={JS}>
    <Masthead {...JS} />
    <SectionBannerExpanded>
      <Container>
        <Logo src={JS.logo} />
        <EventInfo {...JS} />
      </Container>
    </SectionBannerExpanded>
    <EventExpectations />
    <Container>
      <Section>
        <SpeakersTeaser {...JS} />
      </Section>

      <Section>
        <News />
      </Section>

      <Section>
        <EventsList />
      </Section>
      <Section>
        <MailingList {...JS.contact} />
      </Section>

      <Section>
        <CodeOfConduct />
      </Section>

      <Sponsorship {...JS} />
    </Container>

    <Footer {...JS} />
  </Home>
)
