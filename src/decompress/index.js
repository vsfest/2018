import React from 'react'
import Home from '../shared/Home'
import { Decompress } from '../data'
import Masthead from '../shared/Masthead'
import Logo from '../shared/Logo'
import EventInfo from '../shared/EventInfo'
import Schedule from '../shared/Schedule'
import MailingList from '../shared/MailingList'
import CodeOfConduct from '../shared/CodeOfConduct'
import Team from '../shared/Team'


export default () => (
  <Home conference={Decompress}>
    <Masthead {...Decompress} />

    <Logo src={Decompress.logo} />
    <EventInfo {...Decompress} />

    <Schedule />
    <MailingList {...Decompress.contact} />

    <CodeOfConduct />
    <Team />
  </Home>
)
