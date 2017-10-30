import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeadlineSmall from './components/HeadlineSmall'
import Container from './components/Container'
import { LinkThemed } from './components/Links'

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
  
  a, img, span {
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
              <li><Link to='team' passHref><LinkThemed>Team</LinkThemed></Link>•</li>
              <li><Link to='code-of-conduct' passHref><LinkThemed>Code of Conduct</LinkThemed></Link>•</li>
              <li><LinkThemed href={`mailto:${team}`}>Contact</LinkThemed></li>
            </ul>
            
            <HeadlineSmall>Get Involved</HeadlineSmall>
            <ul>
              <li><LinkThemed href={`mailto:${sponsorship}`}>Sponsor</LinkThemed>•</li>
              <li><Link to='call-for-speakers' passHref><LinkThemed>Call for Speakers</LinkThemed></Link></li>
            </ul>
          </div>
          
          <div>
            <HeadlineSmall>Past Events</HeadlineSmall>
            <ul>
              {previousEvents.map((event, i) => {
                if(event.url) return (
                  <li>
                    <LinkThemed href={event.url}>{event.title}</LinkThemed>
                    { i === (previousEvents.length - 1) ? null : '•'}
                  </li>
                )
                return (<li>
                          <span>{event.title}</span>
                          { i === (previousEvents.length - 1) ? null : '•'}
                        </li>)
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
