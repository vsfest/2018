import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Headline from './components/Headline'
import Title from './components/Title'
import { ButtonThemed } from './components/Buttons'
import { LinkThemed } from './components/Links'
import Copy from './components/Copy'

import Container from '../shared/components/Container'
import {
  Section,
  SectionFlex,
  SectionCentered
} from '../shared/components/Section'

const StyledLink = LinkThemed.withComponent(Link)

const Photo = ({ src, alt = 'Inline image' }) => (
  <Photo.Wrapper>
    <Photo.Img src={src} alt={alt} />
  </Photo.Wrapper>
)

Photo.Wrapper = styled.div`
  margin-bottom: 60px;

  @media (min-width: 70em) {
    width: 400px;
    margin-right: 60px;
    margin-bottom: 30px;
    margin-left: -200px;
  }
`

Photo.Img = styled.img`
  display: block;
  max-width: 100%;
`

const SpeakerImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`

const Quote = styled.blockquote`
  margin-bottom: 60px;
  @media (min-width: 48em) {
    div {
      display: flex;
      align-items: center;
    }

    p {
      flex: auto;
    }
  }

  p {
    background-color: ${props => props.theme.secondary};
    padding: 30px;
    margin: 0;
  }

  cite {
    margin-top: 30px;
    display: block;
    font-style: normal;
  }

  img {
    display: inline-block;
    width: 200px;
    height: 200px;
  }
`

const JSConfTestimonials = () => (
  <Section>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img src={require('../assets/photo-ruth.jpg')} alt="Ruth John" />
        </SpeakerImageWrapper>
        <p>
          JSConfAU is amazing, the conference organisers, attendees, location,
          socials... well basically everything was brilliant! It was such an
          honour to be a part of it, to talk, play a gig and do a workshop at
          Decompress. I still haven't left Australia... I may never leave
          Australia... Thank you so much JSConfAU!
          <cite>Ruth John</cite>
        </p>
      </div>
    </Quote>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img
            src={require('../assets/photo-michaela.jpg')}
            alt="Michaela Lehr"
          />
        </SpeakerImageWrapper>
        <p>
          Feeling anxious giving my first tech talk in English, the organizers
          and attendees made me feel welcome, encouraged and safe. From the Call
          for Papers, to the travel arrangements, to the conference itself, the
          team made a fantastic job.
          <cite>Michaela Lehr</cite>
        </p>
      </div>
    </Quote>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img
            src={require('../assets/photo-soledad.jpg')}
            alt="Soledad Penandés"
          />
        </SpeakerImageWrapper>
        <p>
          If you are ever faced with the possibility of submitting a proposal
          for this conference, don’t even think about it—do it! It was really
          lovely and well organised—I’m very glad I was invited to apply and my
          proposal was accepted!
          <cite>Soledad Penandés</cite>
        </p>
      </div>
    </Quote>
  </Section>
)
const CSSConfTestimonials = () => (
  <Section>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img src={require('../assets/photo-ally.jpg')} alt="Ally Palanzi" />
        </SpeakerImageWrapper>
        <p>
          Speaking at CSSConf AU was definitely a highlight of 2016. The team
          was so thoughtful and considerate while coordinating the whole thing
          for speakers and attendees. CSSConf, JSConf, and Decompress AU were
          some of the best community events I’ve ever attended. Bonus: I got to
          pet a wallaby.
          <cite>Ally Palanzi</cite>
        </p>
      </div>
    </Quote>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img src={require('../assets/photo-michael.jpg')} alt="Michael Rog" />
        </SpeakerImageWrapper>
        <p>
          CSSconf AU was the most thoughtfully organized conference I’ve ever
          been a part of. The speaker experience was flawless; I'm so
          appreciative of the amazing effort ya’ll put forth to make us all feel
          informed, welcomed, comfortable, and prepared.
          <cite>Michael Rog</cite>
        </p>
      </div>
    </Quote>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img
            src={require('../assets/photo-nadieh.jpg')}
            alt="Nadieh Bremer"
          />
        </SpeakerImageWrapper>
        <p>
          Travelling halfway around the world to get the opportunity to speak at
          CSSConf AU 2016 was more than worth it! The attendees interacted with
          the speakers (and each other), everybody was so welcoming, the parties
          were amazing and I've met a lot of new people that I hope to stay in
          touch with far beyond the conference.
          <cite>Nadieh Bremer</cite>
        </p>
      </div>
    </Quote>
    <Quote>
      <div>
        <SpeakerImageWrapper>
          <img src={require('../assets/photo-serena.jpg')} alt="Serena Chen" />
        </SpeakerImageWrapper>
        <p>
          My experience was wonderful - not only was the conference filled with
          incredibly fascinating talks, having the travel necessities taken care
          of beforehand took so much stress out of the days preparing for
          CSSConf. I could focus on delivering the best talk I could.
          <cite>Serena Chen</cite>
        </p>
      </div>
    </Quote>
  </Section>
)

const CSSConfTopics = () => (
  <ul>
    <li>Cutting-edge advancements in the world of front-end and design</li>
    <li>Scalability and performance</li>
    <li>Architecture and maintainability</li>
    <li>Ways of transforming CSS</li>
    <li>Modular front-end systems</li>
    <li>Animation</li>
    <li>Pushing the boundaries of SVG</li>
    <li>Tools and workflows</li>
    <li>Being a better designer and/or front-end developer</li>
    <li>Ridiculous, wild ideas and projects</li>
    <li>And finally: whatever you want, this is your conference!</li>
  </ul>
)

const JSConfTopics = () => (
  <ul>
    <li>Cutting-edge advancements in the world of JavaScript</li>
    <li>JavaScript-powered audio and visuals</li>
    <li>JavaScript automation</li>
    <li>Making art with JavaScript</li>
    <li>New, interesting angles on JavaScript frameworks</li>
    <li>Robotics and hardware</li>
    <li>Virtual Reality</li>
    <li>Being a better developer</li>
    <li>The state and future of the JavaScript community</li>
    <li>Ridiculous, wild ideas and projects</li>
    <li>And finally: whatever you want, this is your conference!</li>
  </ul>
)
export default ({ conference }) => {
  const team = conference.contact.team
  const cfpURL = conference.cfpURL

  return (
    <Container>
      <Helmet {...conference}>
        <title>Call for Speakers — {conference.title}</title>
      </Helmet>
      <SectionCentered>
        <Title>Call For Speakers</Title>
        <p>
          <strong>Our Call for Speakers has closed.</strong>
        </p>
        <p>
          If you have submitted a talk, we will notify you of the result before
          January 2018.
        </p>
      </SectionCentered>

      <Section>
        <Headline>Topic suggestions</Headline>
        <p>
          While we’re open to a wide range of topics; we’re particularly
          interested in talks that somewhat fit in the spectrum of:{' '}
        </p>

        {conference.id === 'css' ? CSSConfTopics() : JSConfTopics()}

        <p>
          If you’re unsure whether the proposal fits into the conference feel
          free to submit it nonetheless to avoid missing out on the speaking
          opportunity. Alternatively, consider applying for our partner
          conference, {conference.id === 'css' ? 'JSConf' : 'CSSConf'} AU,
          happening in the same venue during the same week. You’re welcome to
          propose multiple presentations.
        </p>
        <p>We’d love to hear what you’re passionate about!</p>
      </Section>

      <Section>
        <Headline>How to write a good proposal?</Headline>
        <SectionFlex>
          <div>
            <Photo src={require('../assets/photo-sole.jpg')} />
          </div>
          <div>
            <p>Here’s what we expect from a proposal:</p>

            <ul>
              <li>
                <strong>Language:</strong> All talks are in English.
              </li>
              <li>
                <strong>Talk Duration:</strong> Talks should be{' '}
                <strong>30 minutes long</strong> (although usually there’s no
                problem if a talk falls anywhere in-between 20 and 40 minutes).
                There will be no Q&A.
              </li>
              <li>
                <strong>Conciseness:</strong> Keep the proposal short and sweet—<strong
                >
                  up to four paragraphs
                </strong>. It’s tempting to write a lengthy description to fully
                convey the idea in your head, but due to the amount of
                submissions we get it makes a big difference if a proposal makes
                a good impression straight away.
              </li>
              <li>
                <strong>Formatting:</strong> Write with care. Typos, sloppy
                formatting, all-lowercase proposals will reflect negatively on
                the outcome of your submission.
              </li>
              <li>
                <strong>Originality:</strong> We’re committed to pushing the
                community forward, which is why we favour original content.
                There’s nothing wrong with a talk that has already been given
                elsewhere though, if it will be presented with new information
                or demonstrations, making it unique for our audience.
              </li>
            </ul>
          </div>
        </SectionFlex>
      </Section>

      <Section>
        <Headline>We can help</Headline>
        <p>
          We know that not everyone considers themselves a potential speaker.
          Delivering a talk can be challenging. Designing beautiful slides might
          feel impossible. Live demos can go wrong in so many ways.
        </p>

        <p>
          We believe anyone can become a speaker. &nbsp;<strong>
            We’re here to help and guide you to develop skills to deliver a
            stellar talk
          </strong>.
        </p>

        <p>Here’s what we can do:</p>
        <ul>
          <li>
            Brainstorm general ideas for a talk (<LinkThemed
              href={`mailto:${team}`}
            >
              just drop us an email
            </LinkThemed>, but remember to{' '}
            <strong>not disclose talk titles or full abstracts</strong> as it
            might disqualify your future submissions).
          </li>
          <li>
            Connect you to experienced speakers, who can offer mentorship in
            preparing a great talk.
          </li>
          <li>
            Provide advice on creating a great slide deck, from typography,
            colours, copy-writing to accessibility and Code of Conduct
            compliance.
          </li>
          <li>
            Rehearse the talk with you via Skype, phone or over a cuppa here in
            Melbourne.
          </li>
          <li>
            Connect you to local groups if you’d like to practice in front of a
            friendly crowd.
          </li>
        </ul>

        <p>Additionally, you might find these materials helpful:</p>

        <ul>
          <li>
            <LinkThemed href="http://weareallaweso.me/">
              You would make an awesome speaker
            </LinkThemed>
          </li>
          <li>
            <LinkThemed href="http://wunder.schoenaberselten.com/2016/02/16/how-to-prepare-and-write-a-tech-conference-talk/">
              How to prepare and write a tech conference talk
            </LinkThemed>
          </li>
          <li>
            <LinkThemed href="https://emptysqua.re/blog/how-i-write-a-conference-talk/">
              Do Your Slides At The Last Minute
            </LinkThemed>
          </li>
          <li>
            <LinkThemed href="http://www.sarahmei.com/blog/2014/04/07/what-your-conference-proposal-is-missing/">
              What Your Conference Proposal Is Missing
            </LinkThemed>
          </li>
        </ul>
      </Section>

      <Section>
        <Headline>The selection process</Headline>
        <SectionFlex>
          <div>
            <Photo src={require('../assets/photo-lena.jpg')} />
          </div>
          <div>
            <p>
              We wrote a lengthy explanation of how we’re going to be gathering
              submissions and why we’re doing things differently—<LinkThemed href="http://2016.cssconf.com.au/2016/07/01/cfp.html">
                you should have a look
              </LinkThemed>. Here’s how it’ll work in a nutshell:
            </p>

            <ul>
              <li>
                All submissions are anonymised with a carefully curated amount
                of conscious bias.
              </li>
              <li>
                All talks are reviewed and voted on by the conference organisers
                based on the following criteria:
                <ul>
                  <li>relevance to the community</li>
                  <li>clarity and cohesiveness of the proposal</li>
                  <li>originality of the talk</li>
                </ul>
              </li>
              <li>
                Triaged submissions are completely de-anonymised and we select
                the final lineup.
              </li>
              <li>
                Call for Speakers participants are notified, no matter the
                outcome.
              </li>
            </ul>
          </div>
        </SectionFlex>
      </Section>

      <Section>
        <Headline>What we’re offering</Headline>
        <p>If your talk is selected, here’s what you’ll get:</p>

        <p>
          <strong>Travel to and within Melbourne</strong>
        </p>
        <p>
          We’ll cover the cost of reasonable, comfortable flights for yourself
          and, if you’re based in Australia or New Zealand, your partner, child,
          or whoever else you wish to bring. Additionally, we’ll provide an
          account with a cab company so you can get around Melbourne without
          worrying about costs.{' '}
        </p>
        <p>
          If your employer can cover your travel and/or accommodation, we'll be
          happy to list them as a sponsor. The money we save will be invested
          into making the conference even better and will be allocated to our
          Diversity Fund.
        </p>

        <p>
          <strong>Accommodation</strong>
        </p>
        <p>
          6 nights in a nice, central hotel, located close to the venue. We’d
          like you to be well rested and have the ability to discover and enjoy
          the beauty of the city.
        </p>

        <p>
          <strong>Sim Cards</strong>
        </p>
        <p>
          We realise how difficult it might be to travel without roaming data
          and not be able to easily contact your loved ones, check emails or
          simply use maps. That’s why we will provide our speakers with prepaid
          local sim cards.
        </p>

        <p>
          <strong>Help with visas</strong>
        </p>
        <p>
          If you’re travelling from overseas we’ll assist you in finding the
          right type of visa and providing a letter of invitation to make the
          visit as smooth as possible.
        </p>

        <p>
          <strong>Dedicated team member to assist you</strong>
        </p>
        <p>
          A selected member of the organisers team will keep in touch with you
          regarding travel plans, enquiries or any possible questions that might
          arise (yes, we will hook you up with a Foursquare list with the best
          coffee in town).
        </p>

        <p>
          <strong>Entrance to all conferences</strong>
        </p>
        <p>
          As a speaker you can access all our events during the conference week
          free of charge. That includes CSSConf, JSConf, Decompress and all
          accompanying parties.
        </p>

        <p>
          <strong>A fun post-conference activity day</strong>
        </p>
        <p>
          After all events are wrapped up we invite our speakers, their partners
          or families to enjoy a relaxing day together. Last year we rented a
          bus and went up to{' '}
          <LinkThemed href="https://www.zoo.org.au/healesville">
            Healesville Sanctuary
          </LinkThemed>{' '}
          to get to know some of Australia’s famous, not-at-all-deadly animals.
        </p>

        <p>
          <strong>High-quality recording of your talk</strong>
        </p>
        <p>
          All talks are recorded, live-streamed and later on published to the
          conference YouTube channel—that includes slides, demos and any
          on-screen activity. We do it to benefit the entire tech community and
          those who couldn’t make it to the conference. If you’re uncomfortable
          with this approach in anyway, we can work around it.{' '}
        </p>

        <p>
          We will be gathering dietary requirements or any other necessary
          information to accommodate our speakers prior to the event. If you
          have any concerns or questions about whether all your needs can be
          addressed,{' '}
          <LinkThemed href={`mailto:${team}`}>please contact us.</LinkThemed>
        </p>
      </Section>

      <Section>
        <Headline>Code of Conduct</Headline>
        <p>
          By applying to speak you agree to follow the conference{' '}
          <StyledLink to="code-of-conduct">Code of Conduct</StyledLink>. We are
          committed to providing a harassment-free, professional and welcoming
          environment for all attendees.
        </p>

        <p>
          Speakers should pay particular attention and avoid using visuals,
          audio or language that may potentially be considered offensive or
          harmful (sexual, racist, homophobic, insensitive, etc.) as it will not
          be tolerated.
        </p>
      </Section>

      <Section>
        <Headline>Past speakers feedback</Headline>
        <Copy>
          Don’t take our word for it and read about the experiences of our past
          speakers.
        </Copy>

        {conference.id === 'css' ? CSSConfTestimonials() : JSConfTestimonials()}

        <SectionCentered>
          <ButtonThemed href={cfpURL}>Submit a talk</ButtonThemed>
        </SectionCentered>
      </Section>
    </Container>
  )
}
