import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Headline from './components/Headline'
import Title from './components/Title'
import LargeButtonLink from './components/LargeButtonLink'

const Container = styled.div`
  padding: 30px 0;
  > * {
    margin-bottom: 30px;
  }
`

const JSConfTestimonials = () => (
  <div>
    <blockquote>
      <p>JSConfAU is amazing, the conference organisers, attendees, location, socials... well basically everything was brilliant! It was such an honour to be a part of it, to talk, play a gig and do a workshop at Decompress. I still haven't left Australia... I may never leave Australia... Thank you so much JSConfAU!</p>
      <cite>Ruth John</cite>
    </blockquote>
    <blockquote>
      <p>Feeling anxious giving my first tech talk in English, the organizers and attendees made me feel welcome, encouraged and safe. From the Call for Papers, to the travel arrangements, to the conference itself, the team made a fantastic job.</p>
      <cite>Michaela Lehr</cite>
    </blockquote>
    <blockquote>
      <p></p>
      <cite>Soledad Penandés</cite>
    </blockquote>
  </div>
)
const CSSConfTestimonials = () => (
  <div>
    <blockquote>
      <p>Speaking at CSSConf AU was definitely a highlight of 2016. The team was so thoughtful and considerate while coordinating the whole thing for speakers and attendees. CSSConf, JSConf, and Decompress AU were some of the best community events I've ever attended. Bonus: I got to pet a wallaby.</p>
      <cite>Ally Palanzi</cite>
    </blockquote>
    <blockquote>
      <p>CSSconf AU was the most thoughtfully organized conference I've ever been a part of. The speaker experience was flawless; I'm so appreciative of the amazing effort yall put forth to make us all feel informed, welcomed, comfortable, and prepared.</p>
      <cite>Michael Rog</cite>
    </blockquote>
    <blockquote>
      <p>Travelling halfway around the world to get the opportunity to speak at CSSConf AU 2016 was more than worth it! The attendees interacted with the speakers (and each other), everybody was so welcoming, the parties were amazing and I've met a lot of new people that I hope to stay in touch with far beyond the conference.</p>
      <cite>Nadieh Bremer</cite>
    </blockquote>
    
    <blockquote>
      <p>My experience was wonderful - not only was the conference filled with incredibly fascinating talks, having the travel necessities (flights, accommodation) taken care of beforehand took so much stress out of the days preparing for CSSConf. I could focus on delivering the best talk I could.</p>
      <p>I know this must sound cheesy, but there really is something to be said of explicitly inclusive environments. They ease the normal doubts that float around when you're a minority in tech. When you trust that the organisers care about creating an inclusive space, a weight gets lifted. It frees us to absorb, learn, meet amazing people - all the things you're usually supposed to do at a conference, without worries.</p>
      <cite>Serena Chen</cite>
    </blockquote>
  </div>
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
  return (
    <Container>
      <Title>Call For Speakers</Title>
      <p><strong>The Call for Speakers will close on December 1st.</strong></p>
      
      <LargeButtonLink>Submit a talk</LargeButtonLink>

      <Headline>Topic suggestions</Headline>
      <div>
        <p>While we’re open to a wide range of topics; we’re particularly interested in talks that somewhat fit in the spectrum of: </p>
        
        { conference.id === 'css' ? CSSConfTopics() : JSConfTopics() }
        
        <p>If you’re unsure whether the proposal fits into the conference feel free to submit it nonetheless to avoid missing out on the speaking opportunity. Alternatively, consider applying for our partner conference, { conference.id === 'css' ? 'JSConf' : 'CSSConf' } AU, happening in the same venue during the same week. You’re welcome to propose multiple presentations.</p>
        <p>We’d love to hear what you’re passionate about!</p>
      </div>
      
      <hr />
      
      <Headline>How to write a good proposal?</Headline>
      <div>
        <p>Here’s what we expect from a proposal:</p>
        
        <ul>
          <li><strong>Language:</strong> All talks are in English.</li>
          <li><strong>Talk Duration:</strong> Talks should be <strong>30 minutes long</strong> (although usually there’s no problem if a talk falls anywhere in-between 20 and 40 minutes). There will be no Q&A.</li>
          <li><strong>Conciseness:</strong> Keep the proposal short and sweet—<strong>up to four paragraphs</strong>. It’s tempting to write a lengthy description  to fully convey the idea in your head, but due to the amount of submissions we get it makes a big difference if a proposal makes a good impression straight away.</li>
          <li><strong>Formatting:</strong> Write with care. Typos, sloppy formatting, all-lowercase proposals will reflect negatively on the outcome of your submission.</li>
          <li><strong>Originality:</strong> We’re committed to pushing the community forward, which is why we favour original div. There’s nothing wrong with a talk that has already been given elsewhere if it will be presented with new information or demonstrations, making it unique for our audience.</li>
        </ul>
      </div>
      
      <hr />
      
      <Headline>We can help</Headline>
      <div>
        <p>
          We know that not everyone considers themselves a potential speaker. Delivering a talk can be challenging. Designing beautiful slides might feel impossible. Live demos can go wrong in so many ways. 
        </p>
        
        <p>We believe anyone can become a speaker. <strong>We’re here to help and guide you to develop skills to deliver a stellar talk</strong>.</p>
        
        <p>Here’s what we can do:</p>
        <ul>
          <li>Brainstorm the ideas for a talk (<a href={`mailto:${team}`}>just drop us an email</a>).</li>
          <li>Connect you to experienced speakers, who can offer mentorship in preparing a great talk.</li>
          <li>Provide advice on creating a great slide deck, from typography, colours, div-writing to accessibility and Code of Conduct compliance.</li>
          <li>Rehearse the talk with you via Skype, phone or over a cuppa here in Melbourne.</li>
          <li>Connect you to local groups if you’d like to practice in front of a friendly crowd.</li>
        </ul>
        
        <p>Additionally, you might find these materials helpful:</p>
        
        <ul>
          <li><a href="http://weareallaweso.me/">You would make an awesome speaker</a></li>
          <li><a href="http://wunder.schoenaberselten.com/2016/02/16/how-to-prepare-and-write-a-tech-conference-talk/">How to prepare and write a tech conference talk</a></li>
          <li><a href="https://emptysqua.re/blog/how-i-write-a-conference-talk/">Do Your Slides At The Last Minute</a></li>
          <li><a href="http://www.sarahmei.com/blog/2014/04/07/what-your-conference-proposal-is-missing/">What Your Conference Proposal Is Missing</a></li>
        </ul>
      </div>
      
      <hr />
      
      <Headline>The selection process</Headline>
      <div>
        <p>We wrote a lengthy explanation of how we’re going to be gathering submissions and why we’re doing things differently—you should have a look. Here’s how it’ll work in a nutshell:</p>
        
        <ul>
          <li>All submissions are anonymised with a carefully curated amount of conscious bias.</li>
          <li>
            All talks are reviewed and voted on by the conference organisers based on the following criteria:
            <ul>
              <li>relevance to the community</li>
              <li>clarity and cohesiveness of the proposal</li>
              <li>originality of the talk</li>
            </ul>
          </li>
          <li>Triaged submissions are completely de-anonymised and we select the final lineup.</li>
          <li>Call for Speakers participants are notified, no matter the outcome.</li>
          
        </ul>
      </div>
      
      <hr />
      
      <Headline>What we’re offering</Headline>
      <div>
        <p>If your talk is selected, here’s what you’ll get:</p>
        
        <p><strong>Travel to and within Melbourne</strong></p>
        <p>We’ll cover the cost of reasonable, comfortable flights for yourself and, if you’re based in Australia or New Zealand, your partner, child, or whoever else you wish to bring. Additionally, we’ll provide an account with a cab company so you can get around Melbourne without worrying about costs. </p>
        <p>If your employer can cover your travel and/or accommodation, we'll be happy to list them as a sponsor. The money we save will be invested into making the conference even better and will be allocated to our Diversity Fund.</p>
        
        <p><strong>Accommodation</strong></p>  
        <p>5 nights in a nice, central hotel, located close to the venue. We’d like you to be well rested and have the ability to discover and enjoy the beauty of the city.</p>
          
        <p><strong>Sim Cards</strong></p>
        <p>We realise how difficult it might be to travel without roaming data and not be able to easily contact your loved ones, check emails or simply use maps. That’s why we will provide our speakers with prepaid local sim cards.</p>
        
        <p><strong>Help with visas</strong></p>
        <p>If you’re travelling from overseas we’ll assist you in finding the right type of visa and providing a letter of invitation to make the visit as smooth as possible.</p>
        
        <p><strong>Dedicated team member to assist you</strong></p>
        <p>A selected member of the organisers team will keep in touch with you regarding travel plans, enquiries or any possible questions that might arise (yes, we will hook you up with a Foursquare list with the best coffee in town).</p>
        
        <p><strong>Entrance to all conferences</strong></p>
        <p>As a speaker you can access all the events during View Source Fest free of charge. That includes CSSConf, JSConf, Decompress and all accompanying parties.</p>
        
        <p><strong>A fun post-conference activity day</strong></p>
        <p>After all events are wrapped up we invite our speakers, their partners or families to enjoy a relaxing day together. Last year we rented a bus and went up to <a href="https://www.zoo.org.au/healesville">Healesville Sanctuary</a> to get to know some of Australia’s famous, not-at-all-deadly animals.</p>
        
        <p><strong>High-quality recording of your talk</strong></p>
        <p>All talks are recorded, live-streamed and later on published to the conference YouTube channel—that includes slides, demos and any on-screen activity. We do it to benefit the entire tech community and those who couldn’t make it to the conference. If you’re uncomfortable with this approach in anyway, we can work around it. </p>
        
        <p>We will be gathering dietary requirements or any other necessary information to accommodate our speakers prior to the event. If you have any concerns or questions about whether all your needs can be addressed, <a href={`mailto:${team}`}>please contact us.</a></p>
    
      </div>  
    
      <hr />
    
      <Headline>Code of Conduct</Headline>
      <div>
        <p>By applying to speak you agree to follow the conference <Link to="codeofconduct">Code of Conduct</Link>. We are committed to providing a harassment-free, professional and welcoming environment for all attendees.</p>

        <p>Speakers should pay particular attention and avoid using visuals, audio or language that may potentially be considered offensive or harmful (sexual, racist, homophobic, insensitive, etc.) as it will not be tolerated.</p>
      </div>  
    
      <hr />
    
      <Headline>Past speakers feedback</Headline>
      <p>Don’t take our word for it and read about the experiences of our past speakers.</p>
      
      { conference.id === 'css' ? CSSConfTestimonials() : JSConfTestimonials() }
      
      <LargeButtonLink>Submit a talk</LargeButtonLink>

    </Container>
  )
}
