import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeadlineSmall from './components/HeadlineSmall'
import Container from './components/Container'

const Footer = styled.div`
  background-color: #222;
  font-size: 14px;
  
  footer {
    padding-top: 30px;
    color: #f3f3f3;
    
    @media (min-width: 48em) {
      display: flex;  
    }
  }
  
  div {
    flex: 50%;
  }
  
  ul {
    list-style-type: none;
    margin: 0 0 15px 0;
  }
  
  li {
    display: inline-block;
    padding-right: 7px;
  }
  
  a, img {
    margin-right: 7px;
  }
  
  img {
    margin-bottom: 30px;
  }
`

export default ({contact, previousEvents}) => {
  const team = contact.team
  const sponsorship = contact.sponsorship
  
  return (
    <Footer>
      <Container>
        <footer role='contentinfo'>
          <div>
            <HeadlineSmall>About</HeadlineSmall>
            <ul>
              <li><Link to='team'>Team</Link>•</li>
              <li><Link to='code-of-conduct'>Code of Conduct</Link>•</li>
              <li><a href={`mailto:${team}`}>Contact</a></li>
            </ul>
            
            <HeadlineSmall>Get Involved</HeadlineSmall>
            <ul>
              <li><a href={`mailto:${sponsorship}`}>Sponsor</a>•</li>
              <li><Link to='call-for-speakers'>Call for Speakers</Link></li>
            </ul>
          </div>
          
          <div>
            <HeadlineSmall>Past Events</HeadlineSmall>
            <ul>
              {previousEvents.map((event, i) => {
                if(event.url) return (
                  <li>
                    <a href={event.url}>{event.title}</a>
                    { i === (previousEvents.length - 1) ? null : '•'}
                  </li>
                )
                return (<span>{event.title}</span>)
              })}
            </ul>  
            
            <img src="/flag-aboriginal.jpg" alt="Aboriginal Flag" width='40' />
            <img src="/flag-torres.jpg" alt="Torres Strait Islanders Flag" width='40' />
            <img src="/flag-lgbtqi.jpg" alt="LGBTQI Flag" width='40' />
            
            <p>We acknowledge the Wurundjeri people of the Kulin nations, the traditional owners of the land on which we gather. We pay our respects to their Elders: past, present and future.</p>
            
            <p>We firmly believe in diversity, inclusion and equity.</p>
          </div>
          
        </footer>
      </Container>
    </Footer>
  )
}
