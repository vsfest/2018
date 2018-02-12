import React from 'react'
import Helmet from 'react-helmet'

import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Title from './components/Title'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import Copy from './components/Copy'

export default ({ conference }) => {
  return (
    <Container>
      <Helmet {...conference}>
        <title>Code of Conduct — {conference.title}</title>
      </Helmet>
      <Title>Code of Conduct</Title>
      <Headline>Purpose</Headline>
      <Copy>
        {conference.title} is dedicated to providing a harassment-free
        conference experience for everyone, regardless of gender, gender
        identity and expression, sexual orientation, disability, physical
        appearance, body size, race, age or religion. We do not tolerate
        harassment of conference participants in any form. Sexual language and
        imagery is not appropriate for any conference venue, including talks.
      </Copy>
      <Copy>
        Conference participants or anyone interacting with the event violating
        these rules may be sanctioned or expelled from the conference without a
        refund at the discretion of the conference organisers.
      </Copy>

      <Headline>Anti-harassment</Headline>
      <p>Harassment includes, but is not limited to:</p>
      <ul>
        <li>
          Verbal or written comments that reinforce social structures of
          domination related to gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, race, age,
          religion
        </li>
        <li>Sexual images in public spaces</li>
        <li>Deliberate intimidation, stalking, or following</li>
        <li>Harassing photography or recording</li>
        <li>Sustained disruption of talks or other events</li>
        <li>Inappropriate physical contact</li>
        <li>Unwelcome sexual attention</li>
        <li>Advocating for, or encouraging, any of the above behaviour</li>
      </ul>

      <Headline>Enforcement</Headline>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>
      <p>
        <strong>
          If a participant engages in harassing behaviour, event organisers
          retain the right to take any actions to keep the event a welcoming
          environment for all participants.
        </strong>{' '}
        This includes warning the offender or expulsion from the conference with
        no refund.
      </p>
      <Copy>
        Event organisers may take action to redress anything designed to, or
        with the clear impact of, disrupting the event or making the environment
        hostile for any participants.{' '}
        <strong>
          We expect participants to follow these rules at all event venues,
          event-related social activities as well as social media.
        </strong>
      </Copy>

      <Headline>Reporting</Headline>
      <Copy>
        If someone makes you or anyone else feel unsafe or unwelcome, please
        report it as soon as possible. Conference staff can be identified by
        t-shirts. Harassment and other Code of Conduct violations reduce the
        value of our event for everyone. We want you to be happy at our event.
        People like you make our event a better place. You can make a report
        either personally or anonymously.
      </Copy>

      <Headline>Anonymous report</Headline>
      <p>
        You can{' '}
        <LinkThemed href="https://goo.gl/forms/JTszjaub5cJ3stO82">
          make an anonymous report here
        </LinkThemed>. We can't follow up an anonymous report with you directly,
        but we will fully investigate it and take whatever action is necessary
        to prevent a recurrence.
      </p>
      <HeadlineSmall>Personal report</HeadlineSmall>
      <p>You can make a personal report by:</p>
      <ul>
        <li>
          Contacting a staff member, identified by STAFF badges, buttons, or
          shirts.
        </li>
        <li>
          Emailing us:{' '}
          <LinkThemed href={`mailto:${conference.contact.team}`}>
            {conference.contact.team}
          </LinkThemed>
        </li>
      </ul>
      <p>
        When taking a personal report,{' '}
        <LinkThemed href="/team">our staff</LinkThemed> will ensure you are safe
        and cannot be overheard. They may involve other event staff to ensure
        your report is managed properly. Once safe, we'll ask you to tell us
        about what happened. This can be upsetting, but we'll handle it as
        respectfully as possible, and you can bring someone to support you. You
        won't be asked to confront anyone and we won't tell anyone who you are.
      </p>
      <p>
        Our team will be happy to help you contact hotel/venue security, local
        law enforcement, local support services, provide escorts, or otherwise
        assist you to feel safe for the duration of the event. We value your
        attendance.
      </p>

      <HeadlineSmall>Important contact numbers</HeadlineSmall>
      <ul>
        <li>
          <strong>Police:</strong> 36 Wreckyn Pl, North Melbourne VIC 3051 ph:
          (03) 8379 0800
        </li>
        <li>
          <strong>Centre Against Sexual Assault 24 hour line:</strong> 1800 806
          292
        </li>
        <li>
          <strong>Emergency Medical:</strong> Royal Melbourne Hospital, 300
          Grattan Street
        </li>
        <li>
          <strong>Non Emergency:</strong> Errol Street Medical Centre, 65-67
          Errol Street
        </li>
      </ul>

      <Headline>Photo Policy</Headline>
      <p>
        We will have colored lanyards for attendees to indicate their comfort
        level with being photographed:
      </p>
      <ul>
        <li>
          <strong>Black</strong>: ask beforehand
        </li>
        <li>
          <strong>Green</strong>: fine to photograph
        </li>
        <li>
          <strong>Red</strong>: do not photograph
        </li>
      </ul>
      <Copy>
        In case of any doubt, please ask before taking photographs of attendees,
        speakers or staff.
      </Copy>

      <Headline>Inclusive language</Headline>
      <p>
        In our commitment to a harassment-free and inclusive environment we
        strongly believe it's important to pay attention to harmful language
        patterns.
      </p>

      <HeadlineSmall>Ableism</HeadlineSmall>
      <p>
        Words like "crazy", "dumb", "insane" or "lame" are examples of{' '}
        <strong>ableist language</strong>, devaluating people who have physical
        or mental disabilities. Its appearance often stems not from any
        intentional desire to offend, but from our innate sense of what it means
        to be normal. These words can be avoided by using more fitting, clearer
        descriptions of what we want to communicate.
      </p>
      <p>
        To find out more about ableism and replacement terms please read{' '}
        <LinkThemed href="http://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">
          this guide
        </LinkThemed>.
      </p>

      <HeadlineSmall>Sexism</HeadlineSmall>
      <p>
        Using gendered terms like <i>"dude"</i> or <i>"guys"</i> to address a
        mixed-gendered group of people contributes to furthering exclusion of
        underrepresented individuals. We strongly advise avoiding gendered
        pronouns as well as gendered terms.{' '}
      </p>
      <Copy>
        For more information please familiarise yourself with{' '}
        <LinkThemed href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">
          Geek Feminism wiki guide
        </LinkThemed>.
      </Copy>

      <Headline>Attribution</Headline>
      <p>
        This Code of Conduct was based on{' '}
        <LinkThemed href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
          The Geek Feminism wiki
        </LinkThemed>, the work of{' '}
        <LinkThemed href="https://frameshiftconsulting.com/code-of-conduct-training/">
          Valerie Aurora
        </LinkThemed>{' '}
        and{' '}
        <LinkThemed href="http://confcodeofconduct.com/">
          Conference Code of Conduct
        </LinkThemed>.
      </p>
      <p>Last update: 25 Jan 2018</p>
    </Container>
  )
}
