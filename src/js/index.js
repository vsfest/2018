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
import Contact from '../shared/Contact'
import Footer from '../shared/Footer'

export default () => (
  <Home conference={JS}>
    <Masthead {...JS} />

    <Logo src={JS.logo} />
    <EventInfo {...JS} />

    <Schedule />
    <MailingList {...JS.contact} />

    <CodeOfConduct />

    <Sponsorship {...JS.contact} />

    <Footer {...JS} />
  </Home>
)
