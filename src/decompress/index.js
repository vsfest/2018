import React from 'react'
import Home from '../shared/Home'
import { Decompress } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import EventsList from '../shared/EventsList'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Sponsorship from '../shared/Sponsorship'
import SpeakersTeaser from '../shared/SpeakersTeaser'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import News from '../shared/News'
import { Section, SectionBannerExpanded } from '../shared/components/Section'

export default () => (
  <Home conference={Decompress}>
    <Masthead {...Decompress} />
    <SectionBannerExpanded>
      <Container>
        <Logo src={Decompress.logo} />
        <EventInfo {...Decompress} />
      </Container>
    </SectionBannerExpanded>
    <Container>
      <Section>
        <SpeakersTeaser {...Decompress} />
      </Section>

      <Section>
        <News />
      </Section>

      <Section>
        <EventsList />
      </Section>

      <Section>
        <MailingList {...Decompress.contact} />
      </Section>

      <Section>
        <CodeOfConduct />
      </Section>

      <Sponsorship {...Decompress} />
    </Container>

    <Footer {...Decompress} />
  </Home>
)
