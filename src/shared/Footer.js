import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeadlineSmall from './components/HeadlineSmall'
import { LinkGreyed } from './components/Links'

const StyledLink = LinkGreyed.withComponent(Link)

const Footer = styled.div`
  padding: 30px;
  margin-top: 60px;
  background-color: hsla(0, 0%, 13%, 1);
  color: hsla(0, 0%, 67%, 1);

  footer {
    @media (min-width: 920px) {
      display: flex;
    }
  }
  ul {
    list-style-type: none;
    margin: 30px 0;
  }

  li {
    margin-bottom: 15px;
  }

  img {
    margin-right: 7px;
    margin-bottom: 30px;
  }
`

const Column = styled.div`
  @media (min-width: 768px) {
    flex: 25%;
    padding: 30px;
  }
`

const Acknowledgement = styled.div`
  padding: 30px;
  text-align: center;

  p {
    max-width: 30em;
    margin-left: auto;
    margin-right: auto;
  }
`

export default ({ isCfpOpen, contact, previousEvents }) => {
  const team = contact.team

  return (
    <Footer>
      <footer role="contentinfo">
        <Column>
          <HeadlineSmall>About</HeadlineSmall>
          <ul>
            <li>
              <StyledLink to="information">Information</StyledLink>
            </li>
            <li>
              <StyledLink to="team">Team</StyledLink>
            </li>
            <li>
              <LinkGreyed href={`mailto:${team}`}>Contact</LinkGreyed>
            </li>
          </ul>
        </Column>

        <Column>
          <HeadlineSmall>Get Involved</HeadlineSmall>
          <ul>
            <li>
              <StyledLink to="sponsors">Sponsor</StyledLink>
            </li>
            {isCfpOpen ? (
              <li>
                <StyledLink to="call-for-speakers">Become a Speaker</StyledLink>
              </li>
            ) : null}
          </ul>
        </Column>

        <Column>
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
        </Column>

        <Column>
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
        </Column>
      </footer>
      <Acknowledgement>
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
        <img
          src={require('../assets/flag-transgender.jpg')}
          alt="Transgender Pride Flag"
          width="40"
        />

        <p>
          We acknowledge the Wurundjeri people of the Kulin nations, the
          traditional owners of the land on which we gather. We pay our respects
          to their Elders: past, present and future.
        </p>

        <p>We firmly believe in diversity, inclusion and equality.</p>
      </Acknowledgement>
    </Footer>
  )
}
