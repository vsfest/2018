import React from 'react'
import Home from '../shared/Home'
import { CSS } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import EventExpectations from '../shared/EventExpectations'
import SpeakersTeaser from '../shared/SpeakersTeaser'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import News from '../shared/News'
import EventsList from '../shared/EventsList'
import { Section, SectionBannerExpanded } from '../shared/components/Section'

export default () => (
  <Home conference={CSS}>
    <Masthead {...CSS} />
    <SectionBannerExpanded>
      <Container>
        <Logo src={CSS.logo} />
        <EventInfo {...CSS} />
      </Container>
    </SectionBannerExpanded>
    <EventExpectations {...CSS} />
    <Container>
      <Section>
        <SpeakersTeaser {...CSS} />
      </Section>

      <Section>
        <News />
      </Section>

      <Section>
        <EventsList />
      </Section>
      <Section>
        <MailingList {...CSS.contact} />
      </Section>

      <Section>
        <CodeOfConduct />
      </Section>

      <Sponsorship {...CSS} />
    </Container>

    <Footer {...CSS} />
  </Home>
)
