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
import Team from '../shared/Team'
import Contact from '../shared/Contact'


export default () => (
  <Home conference={Decompress}>
    <Masthead {...Decompress} />

    <Logo src={Decompress.logo} />
    <EventInfo {...Decompress} />

    <Schedule />
    <MailingList {...Decompress.contact} />

    <CodeOfConduct />

    <Sponsorship {...Decompress.contact} />
    <Team members={Staff} />

    <Contact {...Decompress.contact} />
  </Home>
)
