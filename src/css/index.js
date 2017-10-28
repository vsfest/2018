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
import Team from '../shared/Team'
import Contact from '../shared/Contact'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'

export default () => (
  <Home conference={CSS}>
    <Masthead {...CSS} />
    <Container>

      <Logo src={CSS.logo} />
      <EventInfo {...CSS} />

      <Schedule />
      <MailingList {...CSS.contact} />

      <CodeOfConduct />

      <Sponsorship {...CSS.contact} />
    </Container>

    <Footer {...CSS} />
  </Home>
)
