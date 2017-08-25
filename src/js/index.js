import React from 'react'
import Home from '../shared/Home'
import { JS } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Team from '../shared/Team'

export default () => (
  <Home conference={JS}>
    <Masthead {...JS} />

    <Logo src={JS.logo} />
    <EventInfo {...JS} />

    <Schedule />
    <MailingList {...JS.contact} />

    <CodeOfConduct />
    <Team />
  </Home>
)
