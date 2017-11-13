import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeadlineSmall from './components/HeadlineSmall'
import { LinkGreyed } from './components/Links'

const StyledLink = LinkGreyed.withComponent(Link)

const Footer = styled.div`
  margin-top: 30px;
  padding: 60px 30px 30px 30px;
  position: relative;

  &:before {
    content: '';
    width: 30%;
    height: 2px;
    background-color: hsl(0, 0%, 90%);
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -15%;
  }

  p {
    color: hsl(0, 0%, 35%);
  }

  footer {
    @media (min-width: 920px) {
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
    margin-right: 15px;
  }

  img {
    margin-right: 7px;
    margin-bottom: 30px;
  }
`

export default ({ isCfpOpen, contact, previousEvents }) => {
  const team = contact.team

  return (
    <Footer>
      <footer role="contentinfo">
        <div>
          <HeadlineSmall>About</HeadlineSmall>
          <ul>
            <li>
              <StyledLink to="information">Information</StyledLink>
            </li>
            <li>
              <StyledLink to="schedule">Schedule</StyledLink>
            </li>
            <li>
              <StyledLink to="team">Team</StyledLink>
            </li>
            <li>
              <LinkGreyed href={`mailto:${team}`}>Contact</LinkGreyed>
            </li>
          </ul>

          <HeadlineSmall>Get Involved</HeadlineSmall>
          <ul>
            <li>
              <StyledLink to="sponsor">Sponsor</StyledLink>
            </li>
            {isCfpOpen ? (
              <li>
                <StyledLink to="call-for-speakers">Become a Speaker</StyledLink>
              </li>
            ) : null}
          </ul>

          <HeadlineSmall>Diversity & Inclusion</HeadlineSmall>
          <ul>
            <li>
              <StyledLink to="accessibility">
                Accessibility Statement
              </StyledLink>
            </li>
            <li>
              <StyledLink to="code-of-conduct">Code of Conduct</StyledLink>
            </li>
            <li>
              <StyledLink to="scholarship">Opportunity Program</StyledLink>
            </li>
          </ul>
        </div>

        <div>
          <HeadlineSmall>Past Events</HeadlineSmall>
          <ul>
            {previousEvents.map((event, i) => {
              if (event.url)
                return (
                  <li key={i}>
                    <LinkGreyed href={event.url}>{event.title}</LinkGreyed>
                  </li>
                )
              return (
                <li key={i}>
                  <span>{event.title}</span>
                </li>
              )
            })}
          </ul>

          <img
            src={require('../assets/flag-aboriginal.jpg')}
            alt="Aboriginal Flag"
            width="40"
          />
          <img
            src={require('../assets/flag-torres.jpg')}
            alt="Torres Strait Islanders Flag"
            width="40"
          />
          <img
            src={require('../assets/flag-lgbtqi.jpg')}
            alt="LGBTQI Flag"
            width="40"
          />

          <p>
            We acknowledge the Wurundjeri people of the Kulin nations, the
            traditional owners of the land on which we gather. We pay our
            respects to their Elders: past, present and future.
          </p>

          <p>We firmly believe in diversity, inclusion and equality.</p>
        </div>
      </footer>
    </Footer>
  )
}
