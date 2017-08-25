import React from 'react'
import Home from '../shared/Home'
import { CSS, Staff } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Team from '../shared/Team'

export default () => (
  <Home conference={CSS}>
    <Masthead {...CSS} />

    <Logo src={CSS.logo} />
    <EventInfo {...CSS} />

    <Schedule />
    <MailingList {...CSS.contact} />

    <CodeOfConduct />
    <Team members={Staff} />
  </Home>
)
