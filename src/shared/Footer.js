import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeadlineSmall from './components/HeadlineSmall'
import Container from './components/Container'

const Footer = styled.div`
  font-size: 16px;
  margin-top: 30px;

  footer {
    border-top: 2px solid ${props => props.theme.secondary};
    padding-top: 30px;

    @media (min-width: 48em) {
      display: flex;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.primary};

    &:focus {
      outline: none;
    }

    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.primaryHover};
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

  a,
  img,
  span {
    margin-right: 7px;
  }

  img {
    margin-bottom: 30px;
  }
`

export default ({ isCfpOpen, contact, previousEvents }) => {
  const team = contact.team
  const sponsorship = contact.sponsorship

  return (
    <Footer>
      <Container>
        <footer role="contentinfo">
          <div>
            <HeadlineSmall>About</HeadlineSmall>
            <ul>
              <li>
                <Link to="team">Team</Link>•
              </li>
              <li>
                <Link to="code-of-conduct">Code of Conduct</Link>•
              </li>
              <li>
                <a href={`mailto:${team}`}>Contact</a>
              </li>
            </ul>

            <HeadlineSmall>Get Involved</HeadlineSmall>
            <ul>
              <li>
                <a href={`mailto:${sponsorship}`}>Sponsor</a>•
              </li>
              {isCfpOpen ? (
                <li>
                  <Link to="call-for-speakers">Call for Speakers</Link>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <HeadlineSmall>Past Events</HeadlineSmall>
            <ul>
              {previousEvents.map((event, i) => {
                if (event.url)
                  return (
                    <li key={i}>
                      <a href={event.url}>{event.title}</a>
                      {i === previousEvents.length - 1 ? null : '•'}
                    </li>
                  )
                return (
                  <li key={i}>
                    <span>{event.title}</span>
                    {i === previousEvents.length - 1 ? null : '•'}
                  </li>
                )
              })}
            </ul>

            <img src="/flag-aboriginal.jpg" alt="Aboriginal Flag" width="40" />
            <img
              src="/flag-torres.jpg"
              alt="Torres Strait Islanders Flag"
              width="40"
            />
            <img src="/flag-lgbtqi.jpg" alt="LGBTQI Flag" width="40" />

            <p>
              We acknowledge the Wurundjeri people of the Kulin nations, the
              traditional owners of the land on which we gather. We pay our
              respects to their Elders: past, present and future.
            </p>

            <p>We firmly believe in diversity, inclusion and equity.</p>
          </div>
        </footer>
      </Container>
    </Footer>
  )
}
