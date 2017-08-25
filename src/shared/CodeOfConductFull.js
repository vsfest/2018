import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import Title from './components/Title'

const Container = styled.div`
  padding: 3rem 0;
  > * {
    margin-bottom: 3rem;
  }
  > ${ Headline } {
    margin-bottom: 2rem;
  }
`

const Content = styled.div`
  > p { margin-bottom: 1rem; }
  > ul { 
    list-style-type: disc;
    margin: 0 2rem;
  }
`

export default () => {
  return (
    <Container>
      <Title>Code of Conduct</Title>

      <Headline>
        Purpose
      </Headline>
      <Content>
        <p>
          CSSConf AU is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.
        </p>
      </Content>

      <Headline>
        Anti-harassment
      </Headline>
      <Content>
        <p>
          Harassment includes, but is not limited to:
        </p>
        <ul>
          <li>Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion</li>
          <li>Sexual images in public spaces</li>
          <li>Deliberate intimidation, stalking, or following</li>
          <li>Harassing photography or recording</li>
          <li>Sustained disruption of talks or other events</li>
          <li>Inappropriate physical contact</li>
          <li>Unwelcome sexual attention</li>
          <li>Advocating for, or encouraging, any of the above behaviour</li>
        </ul>
      </Content>

      <Headline>
        Enforcement
      </Headline>
      <Content>
        <p>
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </p>
        <p>
          <strong>If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the event a welcoming environment for all participants.</strong> This includes warning the offender or expulsion from the conference with no refund.</p>
        <p>Event organisers may take action to redress anything designed to, or with the clear impact of, disrupting the event or making the environment hostile for any participants. We expect participants to follow these rules at all event venues and event-related social activities. We think people should follow these rules outside event activities too!
        </p>
      </Content>

      <Headline>
        Reporting
      </Headline>
      <Content>
        <p>
          If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Conference staff can be identified by t-shirts. Harassment and other Code of Conduct violations reduce the value of our event for everyone. We want you to be happy at our event. People like you make our event a better place. You can make a report either personally or anonymously.
        </p>

        <h3>Anonymous report</h3>
        <p>
          You can <a href="https://goo.gl/forms/JTszjaub5cJ3stO82">make an anonymous report here</a>. We can't follow up an anonymous report with you directly, but we will fully investigate it and take whatever action is necessary to prevent a recurrence.
        </p>
        <h3>Personal report</h3>
        <p>
          You can make a personal report by:
        </p>
        <ul>
          <li>Contacting a staff member, identified by STAFF badges, buttons, or shirts.</li>
          <li>Emailing us: <a href="mailto:team@cssconf.com.au">team@cssconf.com.au</a></li>
        </ul>
        <p>
          When taking a personal report, our staff will ensure you are safe and cannot be overheard. They may involve other event staff to ensure your report is managed properly. Once safe, we'll ask you to tell us about what happened. This can be upsetting, but we'll handle it as respectfully as possible, and you can bring someone to support you. You won't be asked to confront anyone and we won't tell anyone who you are.
        </p>
        <p>
          Our team will be happy to help you contact hotel/venue security, local law enforcement, local support services, provide escorts, or otherwise assist you to feel safe for the duration of the event. We value your attendance.
        </p>

        <h3>Important contact numbers</h3>
        <ul>
          <li><strong>Police:</strong> 36 Wreckyn Pl, North Melbourne VIC 3051 ph: (03) 8379 0800</li>
          <li><strong>Centre Against Sexual Assault 24 hour line:</strong> 1800 806 292</li>
          <li><strong>Emergency Medical:</strong> Royal Melbourne Hospital, 300 Grattan Street</li>
          <li><strong>Non Emergency:</strong> Errol Street Medical Centre, 65-67 Errol Street</li>
        </ul>
      </Content>

      <Headline>
        Photo Policy
      </Headline>
      <Content>
        <p>
          We will have colored lanyards for attendees to indicate their comfort level with being photographed:
        </p>
        <ul>
          <li><strong>Black</strong>: ask beforehand</li>
          <li><strong>Green</strong>: fine to photograph</li>
          <li><strong>Red</strong>: do not photograph</li>
        </ul>
        <p>In case of any doubt, please ask before taking photographs of attendees, speakers or staff.</p>
      </Content>

      <Headline>
        Inclusive language
      </Headline>
      <Content>
        <p>
          In our commitment to a harassment-free and inclusive environment we strongly believe it's important to pay attention to harmful language patterns.
        </p>

        <h3>Ableism</h3>
        <p>
          Words like "crazy", "dumb", "insane" or "lame" are examples of <strong>ableist language</strong>, devaluating people who have physical or mental disabilities. Its appearance often stems not from any intentional desire to offend, but from our innate sense of what it means to be normal. These words can be avoided by using more fitting, clearer descriptions of what we want to communicate.
        </p>
        <p>To find out more about ableism and replacement terms please read <a href="http://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">this guide</a>.
        </p>

        <h3>Sexism</h3>
        <p>Using gendered terms like <i>"dude"</i> or <i>"guys"</i> to address a mixed-gendered group of people contributes to furthering exclusion of underrepresented individuals. We strongly advise avoiding gendered pronouns as well as gendered terms. </p>
        <p>
          For more information please familiarise yourself with <a href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">Geek Feminism wiki guide</a>.
        </p>
      </Content>

      <Headline>
        Attribution
      </Headline>
      <Content>
        <p>
          This Code of Conduct was based on <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">The Geek Feminism wiki</a>.
        </p>
      </Content>
    </Container>
  )
}
